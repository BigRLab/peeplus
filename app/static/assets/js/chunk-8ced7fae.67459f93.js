(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ced7fae"],{"0fea":function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c});var a=n("b775"),r={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function i(t){return Object(a["b"])({url:r.role,method:"get",params:t})}function s(t){return Object(a["b"])({url:r.service,method:"get",params:t})}function o(t){return Object(a["b"])({url:r.permissionNoPager,method:"get",params:t})}function c(t){return Object(a["b"])({url:r.orgTree,method:"get",params:t})}},"88bc":function(t,e,n){(function(e){var n=1/0,a=9007199254740991,r="[object Arguments]",i="[object Function]",s="[object GeneratorFunction]",o="[object Symbol]",c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")();function d(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function f(t,e){var n=-1,a=t?t.length:0,r=Array(a);while(++n<a)r[n]=e(t[n],n,t);return r}function m(t,e){var n=-1,a=e.length,r=t.length;while(++n<a)t[r+n]=e[n];return t}var h=Object.prototype,p=h.hasOwnProperty,v=h.toString,b=u.Symbol,g=h.propertyIsEnumerable,y=b?b.isConcatSpreadable:void 0,w=Math.max;function j(t,e,n,a,r){var i=-1,s=t.length;n||(n=x),r||(r=[]);while(++i<s){var o=t[i];e>0&&n(o)?e>1?j(o,e-1,n,a,r):m(r,o):a||(r[r.length]=o)}return r}function O(t,e){return t=Object(t),k(t,e,function(e,n){return n in t})}function k(t,e,n){var a=-1,r=e.length,i={};while(++a<r){var s=e[a],o=t[s];n(o,s)&&(i[s]=o)}return i}function _(t,e){return e=w(void 0===e?t.length-1:e,0),function(){var n=arguments,a=-1,r=w(n.length-e,0),i=Array(r);while(++a<r)i[a]=n[e+a];a=-1;var s=Array(e+1);while(++a<e)s[a]=n[a];return s[e]=i,d(t,this,s)}}function x(t){return A(t)||S(t)||!!(y&&t&&t[y])}function C(t){if("string"==typeof t||F(t))return t;var e=t+"";return"0"==e&&1/t==-n?"-0":e}function S(t){return R(t)&&p.call(t,"callee")&&(!g.call(t,"callee")||v.call(t)==r)}var A=Array.isArray;function E(t){return null!=t&&$(t.length)&&!T(t)}function R(t){return P(t)&&E(t)}function T(t){var e=I(t)?v.call(t):"";return e==i||e==s}function $(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function I(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function P(t){return!!t&&"object"==typeof t}function F(t){return"symbol"==typeof t||P(t)&&v.call(t)==o}var L=_(function(t,e){return null==t?{}:O(t,f(j(e,1),C))});t.exports=L}).call(this,n("c8ba"))},"8d18":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"}},[n("a-row",{attrs:{gutter:48}},[n("a-col",{attrs:{md:8,sm:24}},[n("a-form-item",{attrs:{label:"角色ID"}},[n("a-input",{attrs:{placeholder:"请输入"}})],1)],1),n("a-col",{attrs:{md:8,sm:24}},[n("a-form-item",{attrs:{label:"状态"}},[n("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[n("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),n("a-select-option",{attrs:{value:"1"}},[t._v("正常")]),n("a-select-option",{attrs:{value:"2"}},[t._v("禁用")])],1)],1)],1),n("a-col",{attrs:{md:8,sm:24}},[n("span",{staticClass:"table-page-search-submitButtons"},[n("a-button",{attrs:{type:"primary"}},[t._v("查询")]),n("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("重置")])],1)])],1)],1)],1),n("s-table",{ref:"table",attrs:{size:"default",columns:t.columns,data:t.loadData},scopedSlots:t._u([{key:"expandedRowRender",fn:function(e){return n("div",{staticStyle:{margin:"0"}},[n("a-row",{style:{marginBottom:"12px"},attrs:{gutter:24}},t._l(e.permissions,function(e,a){return n("a-col",{key:a,style:{marginBottom:"12px"},attrs:{span:12}},[n("a-col",{attrs:{span:4}},[n("span",[t._v(t._s(e.permissionName)+"：")])]),e.actionEntitySet.length>0?n("a-col",{attrs:{span:20}},t._l(e.actionEntitySet,function(e,a){return n("a-tag",{key:a,attrs:{color:"cyan"}},[t._v(t._s(e.describe))])}),1):n("a-col",{attrs:{span:20}},[t._v("-")])],1)}),1)],1)}},{key:"action",fn:function(e,a){return n("span",{},[n("a",{on:{click:function(e){return t.$refs.modal.edit(a)}}},[t._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-dropdown",[n("a",{staticClass:"ant-dropdown-link"},[t._v("\n          更多 "),n("a-icon",{attrs:{type:"down"}})],1),n("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("详情")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("禁用")])]),n("a-menu-item",[n("a",{attrs:{href:"javascript:;"}},[t._v("删除")])])],1)],1)],1)}}])}),n("role-modal",{ref:"modal",on:{ok:t.handleOk}})],1)},r=[],i=(n("ac6a"),n("2af9")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-modal",{attrs:{title:"操作",width:800,visible:t.visible,confirmLoading:t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[n("a-steps",{attrs:{current:1}},[n("a-step",[n("template",{slot:"title"},[t._v("\n        Finished\n      ")]),n("span",{attrs:{slot:"description"},slot:"description"},[t._v("This is a description.")])],2),n("a-step",{attrs:{title:"In Progress",description:"This is a description."}}),n("a-step",{attrs:{title:"Waiting",description:"This is a description."}})],1)],1)},o=[],c=n("0fea"),l=n("bade"),u=n("88bc"),d=n.n(u),f={name:"RoleModal",data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},visible:!1,confirmLoading:!1,mdl:{},form:this.$form.createForm(this),permissions:[]}},created:function(){this.loadPermissions()},methods:{add:function(){this.edit({id:0})},edit:function(t){var e=this;if(this.mdl=Object.assign({},t),this.visible=!0,this.mdl.permissions&&this.permissions){var n={};this.mdl.permissions.forEach(function(t){n[t.permissionId]=t.actionEntitySet.map(function(t){return t.action})}),this.permissions.forEach(function(t){t.selected=n[t.id]||[]})}this.$nextTick(function(){e.form.setFieldsValue(d()(e.mdl,"id","name","status","describe"))}),console.log("this.mdl",this.mdl)},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var t=this;this.form.validateFields(function(e,n){e||(console.log("form values",n),t.confirmLoading=!0,new Promise(function(t){setTimeout(function(){return t()},2e3)}).then(function(){t.$message.success("保存成功"),t.$emit("ok")}).catch(function(){}).finally(function(){t.confirmLoading=!1,t.close()}))})},handleCancel:function(){this.close()},onChangeCheck:function(t){t.indeterminate=!!t.selected.length&&t.selected.length<t.actionsOptions.length,t.checkedAll=t.selected.length===t.actionsOptions.length},onChangeCheckAll:function(t,e){Object.assign(e,{selected:t.target.checked?e.actionsOptions.map(function(t){return t.value}):[],indeterminate:!1,checkedAll:t.target.checked})},loadPermissions:function(){var t=this;Object(c["b"])().then(function(e){var n=e.result;t.permissions=n.map(function(t){var e=Object(l["a"])(t.actionData);return t.checkedAll=!1,t.selected=[],t.indeterminate=!1,t.actionsOptions=e.map(function(t){return{label:t.describe,value:t.action}}),t})})}}},m=f,h=n("2877"),p=Object(h["a"])(m,s,o,!1,null,"b02d7e6c",null),v=p.exports,b={name:"TableList",components:{STable:i["p"],RoleModal:v},data:function(){var t=this;return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,form:null,mdl:{},advanced:!1,queryParam:{},columns:[{title:"唯一识别码",dataIndex:"id"},{title:"角色名称",dataIndex:"name"},{title:"状态",dataIndex:"status"},{title:"创建时间",dataIndex:"createTime",sorter:!0},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],loadData:function(e){return t.$http.get("/role",{params:Object.assign(e,t.queryParam)}).then(function(t){return t.result})},selectedRowKeys:[],selectedRows:[]}},methods:{handleEdit:function(t){this.mdl=Object.assign({},t),this.mdl.permissions.forEach(function(t){t.actionsOptions=t.actionEntitySet.map(function(t){return{label:t.describe,value:t.action,defaultCheck:t.defaultCheck}})}),console.log(this.mdl),this.visible=!0},handleOk:function(){this.$refs.table.refresh()},onChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},g=b,y=Object(h["a"])(g,a,r,!1,null,null,null);e["default"]=y.exports},bade:function(t,e,n){"use strict";function a(t){try{return JSON.parse(t)}catch(e){console.log("err",e.message)}return[]}n.d(e,"a",function(){return a})}}]);