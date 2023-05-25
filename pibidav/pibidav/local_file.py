
import frappe
from frappe.utils import cint
from frappe.utils.file_manager import delete_file_from_filesystem
from frappe import enqueue, _


def delete_file_from_local_system(file_doc, settings=None):
    if not settings:
        settings = frappe.get_single("NextCloud Settings")

    if (
        file_doc.uploaded_to_nextcloud and file_doc.share_link
        and file_doc.file_url != file_doc.share_link
        and settings.remove_local_files
    ):
        file_size = cint(file_doc.file_size)
        smallest_size = cint(settings.remove_file_larger)
        largest_size = cint(settings.remove_file_samller)

        if file_size > smallest_size and (not largest_size or file_size < largest_size):
            same_file_filter = {"file_url": file_doc.file_url, "name": ["!=", file_doc.name]}

            if settings.use_nextcloud_for_duplicates:
                delete_file_from_filesystem(file_doc)
                frappe.db.set_value(file_doc.doctype, same_file_filter, "file_url", file_doc.share_link)
            else:
                file_num = frappe.db.count(file_doc.doctype, same_file_filter)

                file_doc.content_hash = ""

                if not cint(file_num):
                    delete_file_from_filesystem(file_doc)

            file_doc.file_url = file_doc.share_link

            return True

    return False


def _remove_uploaded_files(uploaded_files, settings):
    is_delete_file = False
    print("uploaded_files" * 99)
    print(uploaded_files)
    for index, file_name in enumerate(uploaded_files, 1):
        file_doc = frappe.get_doc("File", file_name)
        if delete_file_from_local_system(file_doc, settings):
            file_doc.save()
            is_delete_file = True

        if is_delete_file:
            frappe.publish_progress(index / len(uploaded_files) * 100, _("Delete Uploaded Files..."), doctype=settings.doctype, docname=settings.name)

    if is_delete_file:
        frappe.publish_realtime("msgprint", _("Complete Delete Uploaded Files."), doctype=settings.doctype, docname=settings.name)
    else:
        frappe.publish_realtime("msgprint", _("No File to Delete."), doctype=settings.doctype, docname=settings.name)


@frappe.whitelist()
def remove_uploaded_files():
    QUEUE_LIMIT = 300
    settings = frappe.get_single("NextCloud Settings")
    if settings.remove_local_files:
        smallest_size = cint(settings.remove_file_larger)
        largest_size = cint(settings.remove_file_samller)

        filters = [
            ["File", "uploaded_to_nextcloud", "=", True],
            ["File", "file_url", "NOT LIKE", "http://%"],
            ["File", "file_url", "NOT LIKE", "https://%"],
            ["File", "file_size", ">", smallest_size],
        ]

        if largest_size:
            filters += [["File", "file_size", "<", largest_size]]

        uploaded_files = frappe.get_all("File", pluck="name", filters=filters)
        if len(uploaded_files) > QUEUE_LIMIT:
            enqueue(_remove_uploaded_files, uploaded_files=uploaded_files, settings=settings)
        else:
            _remove_uploaded_files(uploaded_files, settings)
