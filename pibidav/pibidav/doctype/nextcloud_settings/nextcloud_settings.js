// Copyright (c) 2022, pibiCo and contributors
// For license information, please see license.txt

frappe.ui.form.on('NextCloud Settings', {
  refresh: function(frm) {
    if (frm.doc.nc_backup_enable && frm.doc.nc_backup_url && frm.doc.nc_backup_username && frm.doc.nc_backup_token) {
      // add check credentials button
      frm.add_custom_button(__("Check Credentials"), function() {
        frappe.call({
          method: "pibidav.pibidav.custom.check_nextcloud",
          args: {
            doc: frm.doc
          }
        });
      },__("NC Commands"));
      // add backup button 
    	frm.add_custom_button(__("Backup Now"), function() {
				frappe.call({
					method: "pibidav.pibidav.doctype.nextcloud_settings.nextcloud_settings.take_backup",
					freeze: true
				});
			}).addClass("btn-primary");

      if (frm.doc.remove_local_files){
        frm.add_custom_button(__("Delete Uploaded Files"), function() {
          if (frm.is_dirty()){
            frappe.throw(__("Save Settings before perform this task"));
          }
          else{
            frappe.call({
              method: "pibidav.pibidav.local_file.remove_uploaded_files",
            });
          }
        }).addClass("btn-danger");
      }

		}
    // Fill DocType Included with Data From Reference Item Table
    var includeArr = frm.doc.reference_item;
    var inclusion = '';
    for (var i=0; i<includeArr.length; i++) {
      inclusion += includeArr[i].reference_doctype+',';
    }
    frm.doc.nc_doctype_included = inclusion.slice(0,-1);
    frm.refresh_field('nc_doctype_included');
    // Query Filter for Reference Item 
    frm.fields_dict.reference_item.grid.get_field('folder_set').get_query = function(doc, cdt, cdn) {
      var child = locals[cdt][cdn];
      //console.log(child);
      return {    
        filters:[
          ['parent_folder_set', '=', ''],
          ['is_group', '=', 1]
        ]
      };
    };
  }
});