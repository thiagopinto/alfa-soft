(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{387:function(t,e,n){"use strict";n.r(e);var r=n(33),o=(n(84),{name:"TableContacts",props:{items:{type:Array,default:function(){return[]}}},data:function(){return{apiBaseUrl:"http://localhost:8000",fields:[{key:"photo",label:"Avatar",sortable:!1},{key:"name",label:"Nome",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"phone",label:"Fone",sortable:!0},{key:"action",label:"Ações",sortable:!1}]}},mounted:function(){},methods:{deleteContact:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.delete("/contact/".concat(t));case 2:e.$emit("delete");case 3:case"end":return n.stop()}}),n)})))()}}}),l=n(68),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-table",{attrs:{striped:"",hover:"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"cell(photo)",fn:function(data){return[n("b-avatar",{attrs:{variant:"info",src:""+t.apiBaseUrl+data.item.photo}})]}},{key:"cell(phone)",fn:function(data){return[t._v("\n      "+t._s(t._f("VMask")(data.item.phone,"(##) ####-####"))+"\n    ")]}},{key:"cell(action)",fn:function(data){return[n("NuxtLink",{staticClass:"btn btn-warning m-1",attrs:{to:"/edit/"+data.item.id}},[t._v("\n        Edit\n      ")]),t._v(" "),n("NuxtLink",{staticClass:"btn btn-primary m-1",attrs:{to:"/show/"+data.item.id}},[t._v("\n        Show\n      ")]),t._v(" "),n("a",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.deleteContact(data.item.id)}}},[t._v("Delete")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);