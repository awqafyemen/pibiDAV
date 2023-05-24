
import frappe


def load_docs(bootinfo):
    docs = frappe.get_all("Reference Item", pluck="reference_doctype", filters={
        "parentfield": "reference_item",
        "parenttype": "NextCloud Settings",
        "parent": "NextCloud Settings",
    })

    bootinfo.nc_doc_lis = set(docs)
