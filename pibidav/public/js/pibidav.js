!function(){"use strict";var e={name:"TreeNode",props:["node","selected_node"],components:{TreeNode:function(){return frappe.ui.components.TreeNode}},computed:{icon:function(){var e={open:frappe.utils.icon("folder-open","md"),closed:frappe.utils.icon("folder-normal","md"),leaf:frappe.utils.icon("primitive-dot","xs")};return this.node.is_leaf?e.leaf:this.node.open?e.open:e.closed}}},n=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tree-node",class:{opened:e.node.open}},[t("span",{staticClass:"tree-link",class:{active:e.node.value===e.selected_node.value},attrs:{disabled:e.node.fetching},on:{click:function(n){return e.$emit("node-click",e.node)}}},[t("div",{domProps:{innerHTML:e._s(e.icon)}}),e._v(" "),t("a",{staticClass:"tree-label"},[e._v(e._s(e.node.label))])]),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.node.open,expression:"node.open"}],staticClass:"tree-children"},[e._l(e.node.children,function(n){return t("TreeNode",{key:n.value,attrs:{node:n,selected_node:e.selected_node},on:{"node-click":function(n){return e.$emit("node-click",n)},"load-more":function(n){return e.$emit("load-more",n)}}})}),e._v(" "),e.node.has_more_children?t("button",{staticClass:"btn btn-xs btn-load-more",attrs:{disabled:e.node.children_loading},on:{click:function(n){return e.$emit("load-more",e.node)}}},[e._v("\n      "+e._s(e.node.children_loading?e.__("Loading..."):e.__("Load more"))+"\n    ")]):e._e()],2)])};n._withStripped=!0;var t={name:"NcBrowser",components:{TreeNode:function(e,n,t,i,o,l,r,d){var a,s=("function"==typeof t?t.options:t)||{};if(s.__file="/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_browser/TreeNode.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=i,n&&(a=function(e){n.call(this,r(e))}),void 0!==a)if(s.functional){var c=s.render;s.render=function(e,n){return a.call(n),c(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return s}({render:n,staticRenderFns:[]},function(e){e&&e("data-v-29cb5724_0",{source:"\n.btn-load-more[data-v-29cb5724] {\n  margin-left: 1.6rem;\n  margin-top: 0.5rem;\n}\n",map:{version:3,sources:["/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_browser/TreeNode.vue"],names:[],mappings:";AAqDA;EACA,mBAAA;EACA,kBAAA;AACA",file:"TreeNode.vue",sourcesContent:['<template>\n  <div class="tree-node" :class="{ opened: node.open }">\n    <span\n      class="tree-link"\n      @click="$emit(\'node-click\', node)"\n      :class="{ active: node.value === selected_node.value }"\n      :disabled="node.fetching"\n    >\n      <div v-html="icon"></div>\n      <a class="tree-label">{{ node.label }}</a>\n    </span>\n    <ul class="tree-children" v-show="node.open">\n      <TreeNode\n        v-for="n in node.children"\n        :key="n.value"\n        :node="n"\n        :selected_node="selected_node"\n        @node-click="n => $emit(\'node-click\', n)"\n        @load-more="n => $emit(\'load-more\', n)"\n      />\n      <button\n        class="btn btn-xs btn-load-more"\n        v-if="node.has_more_children"\n        @click="$emit(\'load-more\', node)"\n        :disabled="node.children_loading"\n      >\n        {{ node.children_loading ? __("Loading...") : __("Load more") }}\n      </button>\n    </ul>\n  </div>\n</template>\n<script>\nexport default {\n  name: "TreeNode",\n  props: ["node", "selected_node"],\n  components: {\n    TreeNode: () => frappe.ui.components.TreeNode\n  },\n  computed: {\n    icon() {\n      let icons = {\n        open: frappe.utils.icon("folder-open", "md"),\n        closed: frappe.utils.icon("folder-normal", "md"),\n        leaf: frappe.utils.icon("primitive-dot", "xs")\n      };\n      if (this.node.is_leaf) return icons.leaf;\n      if (this.node.open) return icons.open;\n      return icons.closed;\n    }\n  }\n};\n<\/script>\n<style scoped>\n  .btn-load-more {\n    margin-left: 1.6rem;\n    margin-top: 0.5rem;\n  }\n</style>\n']},media:void 0})},e,"data-v-29cb5724",!1,0,function e(){var n=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,o){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var l=i?o.media||"default":e,r=t[l]||(t[l]={ids:[],parts:[],element:void 0});if(!r.ids.includes(e)){var d=o.source,a=r.ids.length;if(r.ids.push(e),i&&(r.element=r.element||document.querySelector("style[data-group="+l+"]")),!r.element){var s=r.element=document.createElement("style");s.type="text/css",o.media&&s.setAttribute("media",o.media),i&&(s.setAttribute("data-group",l),s.setAttribute("data-next-index","0")),n.appendChild(s)}if(i&&(a=parseInt(r.element.getAttribute("data-next-index")),r.element.setAttribute("data-next-index",a+1)),r.element.styleSheet)r.parts.push(d),r.element.styleSheet.cssText=r.parts.filter(Boolean).join("\n");else{var c=document.createTextNode(d),f=r.element.childNodes;f[a]&&r.element.removeChild(f[a]),f.length?r.element.insertBefore(c,f[a]):r.element.appendChild(c)}}}}})},data:function(){return{node:{label:__("/"),value:"/",children:[],children_start:0,children_loading:!1,is_leaf:!1,fetching:!1,fetched:!1,open:!1},selected_node:{},page_length:500}},mounted:function(){this.toggle_node(this.node)},methods:{toggle_node:function(e){var n=this;e.is_leaf||e.fetched?(e.open=!e.open,this.select_node(e)):(e.fetching=!0,e.children_start=0,e.children_loading=!1,this.get_files_in_folder(e.value,0).then(function(t){var i=t.files,o=t.has_more;e.open=!0,e.children=i,e.fetched=!0,e.fetching=!1,e.children_start+=n.page_length,e.has_more_children=o,n.select_node(e)}))},load_more:function(e){var n=this;if(e.has_more_children){var t=e.children_start;e.children_loading=!0,this.get_files_in_folder(e.value,t).then(function(t){var i=t.files,o=t.has_more;e.children=e.children.concat(i),e.children_start+=n.page_length,e.has_more_children=o,e.children_loading=!1})}},select_node:function(e){this.selected_node=e},get_files_in_folder:function(e,n){var t=this;return frappe.call("pibidav.pibidav.custom.get_nc_files_in_folder",{folder:e,start:n,page_length:this.page_length}).then(function(e){var n=e.message||{},i=n.files;void 0===i&&(i=[]);var o=n.has_more;return void 0===o&&(o=!1),{files:i=i.map(function(e){return t.make_file_node(e)}),has_more:o}})},make_file_node:function(e){var n=e.file_name||e.name;return{label:frappe.utils.file_name_ellipsis(n,40),filename:n,file_url:e.file_url,value:e.name,is_leaf:!e.is_folder,fetched:!e.is_folder,children:[],children_loading:!1,children_start:0,open:!1,fetching:!1}},select_folder:function(){var e=this.selected_node;return this.upload_to_folder({is_folder:!e.is_leaf,file_name:e.filename,fileid:e.file_url,path:e.value})},upload_to_folder:function(e){return e}}},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"file-browser"},[t("div",{staticClass:"nc-browser-list"},[t("TreeNode",{staticClass:"tree with-skeleton",attrs:{node:e.node,selected_node:e.selected_node},on:{"node-click":function(n){return e.toggle_node(n)},"load-more":function(n){return e.load_more(n)}}})],1)])};i._withStripped=!0;var o=function(e,n,t,i,o,l,r,d){var a,s=("function"==typeof t?t.options:t)||{};if(s.__file="/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_browser/NcBrowser.vue",s.render||(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,o&&(s.functional=!0)),s._scopeId=i,n&&(a=function(e){n.call(this,r(e))}),void 0!==a)if(s.functional){var c=s.render;s.render=function(e,n){return a.call(n),c(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return s}({render:i,staticRenderFns:[]},function(e){e&&e("data-v-0bec18cb_0",{source:"\n.nc-browser-list {\n  height: 300px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n.tree {\n  overflow: auto;\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 4rem;\n}\n",map:{version:3,sources:["/home/erpnext/erpnext-dev/apps/pibidav/pibidav/public/js/dist/nc_browser/NcBrowser.vue"],names:[],mappings:";AAiIA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;AACA;AACA;EACA,cAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;AACA",file:"NcBrowser.vue",sourcesContent:['<template>\n  <div class="file-browser">\n    <div class="nc-browser-list">\n      <TreeNode\n        class="tree with-skeleton"\n        :node="node"\n        :selected_node="selected_node"\n        @node-click="n => toggle_node(n)"\n        @load-more="n => load_more(n)"\n      />\n    </div>\n  </div>\n</template>\n<script>\nimport TreeNode from "./TreeNode.vue";\n\nexport default {\n  name: "NcBrowser",  \n  components: {\n    TreeNode\n  },\n  data() {\n    return {\n      node: {\n        label: __("/"),\n        value: "/",\n        children: [],\n        children_start: 0,\n        children_loading: false,\n        is_leaf: false,\n        fetching: false,\n        fetched: false,\n        open: false\n      },\n      selected_node: {},\n      page_length: 500\n    };\n  },\n  mounted() {\n    this.toggle_node(this.node);\n  },\n  methods: {\n    toggle_node(node) {\n      if (!node.is_leaf && !node.fetched) {\n        node.fetching = true;\n        node.children_start = 0;\n        node.children_loading = false;\n        this.get_files_in_folder(node.value, 0).then(\n          ({ files, has_more }) => {\n            node.open = true;\n            node.children = files;\n            node.fetched = true;\n            node.fetching = false;\n            node.children_start += this.page_length;\n            node.has_more_children = has_more;\n            this.select_node(node);\n          }\n        );\n      } else {\n        node.open = !node.open;\n        this.select_node(node);\n      }\n    },\n    load_more(node) {\n      if (node.has_more_children) {\n        let start = node.children_start;\n        node.children_loading = true;\n        this.get_files_in_folder(node.value, start).then(\n          ({ files, has_more }) => {\n            node.children = node.children.concat(files);\n            node.children_start += this.page_length;\n            node.has_more_children = has_more;\n            node.children_loading = false;\n          }\n        );\n      }\n    },\n    select_node(node) {\n      //if (node.is_leaf) {\n        this.selected_node = node;\n      //}\n    },\n    get_files_in_folder(folder, start) {\n      return frappe\n      .call("pibidav.pibidav.custom.get_nc_files_in_folder", {\n        folder,\n        start,\n        page_length: this.page_length\n      })\n      .then(r => {\n        let { files = [], has_more = false } = r.message || {};\n        files = files.map(file => this.make_file_node(file));\n        return { files, has_more };\n      });\n    },\n    make_file_node(file) {\n      let filename = file.file_name || file.name;\n      let label = frappe.utils.file_name_ellipsis(filename, 40);\n      return {\n        label: label,\n        filename: filename,\n        file_url: file.file_url,\n        value: file.name,\n        is_leaf: !file.is_folder,\n        fetched: !file.is_folder, // fetched if node is leaf\n        children: [],\n        children_loading: false,\n        children_start: 0,\n        open: false,\n        fetching: false\n      };\n    },\n    select_folder() {\n      let selected_file = this.selected_node;\n      return this.upload_to_folder({\n        is_folder: !selected_file.is_leaf,\n\tfile_name: selected_file.filename,\n        fileid: selected_file.file_url,\n        path: selected_file.value\n      });\n    },\n    upload_to_folder(file) {\n      return file;\n    }\n  }\n};\n<\/script>\n\n<style>\n  .nc-browser-list {\n    height: 300px;\n    overflow: hidden;\n    margin-top: 10px;\n  }\n  .tree {\n    overflow: auto;\n    height: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    padding-bottom: 4rem;\n  }\n</style>\n']},media:void 0})},t,void 0,!1,0,function e(){var n=document.head||document.getElementsByTagName("head")[0],t=e.styles||(e.styles={}),i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,o){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var l=i?o.media||"default":e,r=t[l]||(t[l]={ids:[],parts:[],element:void 0});if(!r.ids.includes(e)){var d=o.source,a=r.ids.length;if(r.ids.push(e),i&&(r.element=r.element||document.querySelector("style[data-group="+l+"]")),!r.element){var s=r.element=document.createElement("style");s.type="text/css",o.media&&s.setAttribute("media",o.media),i&&(s.setAttribute("data-group",l),s.setAttribute("data-next-index","0")),n.appendChild(s)}if(i&&(a=parseInt(r.element.getAttribute("data-next-index")),r.element.setAttribute("data-next-index",a+1)),r.element.styleSheet)r.parts.push(d),r.element.styleSheet.cssText=r.parts.filter(Boolean).join("\n");else{var c=document.createTextNode(d),f=r.element.childNodes;f[a]&&r.element.removeChild(f[a]),f.length?r.element.insertBefore(c,f[a]):r.element.appendChild(c)}}}}});frappe.provide("frappe.ui"),frappe.ui.pibiDocs=class{constructor(e){var n=this;void 0===e&&(e={});var t=e.wrapper,i=e.method,l=e.on_success,r=e.doctype,d=e.docname,a=e.fieldname,s=(e.files,e.folder),c=e.disable_file_browser;e.frm,t?this.wrapper=t.get?t.get(0):t:this.make_dialog(),this.$ncbrowser=new Vue({el:this.wrapper,render:function(e){return e(o,{props:{show_upload_button:!Boolean(n.dialog),doctype:r,docname:d,fieldname:a,method:i,folder:s,on_success:l,disable_file_browser:c}})}}),this.browser=this.$ncbrowser.$children[0],this.browser.$watch("close_dialog",function(e){e&&n.dialog&&n.dialog.hide()})}select_folder(){return this.dialog&&this.dialog.get_primary_btn().prop("disabled",!0),this.browser.select_folder()}make_dialog(){var e=this;this.dialog=new frappe.ui.Dialog({title:__("Select NextCloud Destination Folder"),size:"large",primary_action_label:__("Select"),primary_action:function(){var n=e.select_folder(),t=e.wrapper.ownerDocument.body.getAttribute("data-route").replace("Form/",""),i=t.lastIndexOf("/"),o=t.substr(i+1),l=t.replace("/"+o,"");n.is_folder?frappe.db.set_value(l,o,"nc_folder",n.path):(frappe.db.set_value(l,o,"nc_folder",""),frappe.msgprint(__("You have selected a file and not a folder"),n.file_name)),e.dialog.hide(),window.location.reload()}}),this.wrapper=this.dialog.body,this.dialog.show(),this.dialog.$wrapper.on("hidden.bs.modal",function(){$(this).data("bs.modal",null),$(this).remove()})}}}();
//# sourceMappingURL=pibidav.js.map
