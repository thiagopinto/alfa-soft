(window.webpackJsonp=window.webpackJsonp||[]).push([[53,50],{386:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(6),n(7);var o=n(33),r=n(0),c=(n(84),n(23),n(1),n(3),n(126));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"FormContact",components:{ValidationObserver:c.a,ValidationProvider:c.b},props:{contactProp:{type:Object,default:null}},data:function(){return{contact:{id:null,name:null,email:null,phone:null,photo:null}}},watch:{contactProp:function(t){void 0!==t.id&&(delete t.photo,this.contact=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t))}},mounted:function(){},methods:{onSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(n=new FormData).append("name",t.contact.name),n.append("email",t.contact.email),n.append("phone",t.contact.phone),n.append("photo",t.contact.photo),null==t.contact.id){e.next=12;break}return n.append("_method","patch"),e.next=10,t.$axios.post("/contact/".concat(t.contact.id),n,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data; boundary=".concat(n._boundary)},timeout:9999999});case 10:e.next=14;break;case 12:return e.next=14,t.$axios.post("/contact/",n,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data; boundary=".concat(n._boundary)},timeout:9999999});case 14:t.$toast.success("Created!"),t.$router.push("/"),e.next=21;break;case 18:for(o in e.prev=18,e.t0=e.catch(0),e.t0)e.t0[o].forEach((function(element){}));case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()}}},f=d,m=n(68),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid;return[n("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("h1",{staticClass:"h3 mb-3 fw-normal"},[t._v("Contact")]),t._v(" "),n("ValidationProvider",{attrs:{name:"Name",rules:"required|min:5",immediate:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("b-form-group",{attrs:{id:"input-group-name",label:"Name:","label-for":"input-name"}},[n("b-form-input",{attrs:{id:"input-name",type:"text",placeholder:"Name",required:""},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}}),t._v(" "),t._l(o,(function(e,o){return n("div",{key:o,staticClass:"invalid-feedback d-block"},[t._v("\n              "+t._s(e)+"\n            ")])}))],2)]}}],null,!0)}),t._v(" "),n("ValidationProvider",{attrs:{name:"E-mail",rules:"required|email",immediate:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("b-form-group",{attrs:{id:"input-group-email",label:"Email:","label-for":"input-email"}},[n("b-form-input",{attrs:{id:"input-email",type:"email",placeholder:"E-mail",required:""},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}}),t._v(" "),t._l(o,(function(e,o){return n("div",{key:o,staticClass:"invalid-feedback d-block"},[t._v("\n              "+t._s(e)+"\n            ")])}))],2)]}}],null,!0)}),t._v(" "),n("ValidationProvider",{attrs:{name:"Phone",rules:"required|length:9",immediate:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("b-form-group",{attrs:{id:"input-group-phone",label:"Phone:","label-for":"input-phone"}},[n("b-form-input",{attrs:{id:"input-phone",type:"text",placeholder:"Phone",required:""},model:{value:t.contact.phone,callback:function(e){t.$set(t.contact,"phone",e)},expression:"contact.phone"}}),t._v(" "),t._l(o,(function(e,o){return n("div",{key:o,staticClass:"invalid-feedback d-block"},[t._v("\n              "+t._s(e)+"\n            ")])}))],2)]}}],null,!0)}),t._v(" "),void 0===t.contact.id?n("ValidationProvider",{attrs:{name:"Photo",rules:"required",immediate:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("b-form-group",{attrs:{id:"input-group-photo",label:"Photo:","label-for":"input-photo"}},[n("b-form-file",{attrs:{state:Boolean(t.contact.photo),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.contact.photo,callback:function(e){t.$set(t.contact,"photo",e)},expression:"contact.photo"}}),t._v(" "),t._l(o,(function(e,o){return n("div",{key:o,staticClass:"invalid-feedback d-block"},[t._v("\n              "+t._s(e)+"\n            ")])}))],2)]}}],null,!0)}):t._e(),t._v(" "),void 0!==t.contact.id?n("b-form-group",{attrs:{id:"input-group-photo",label:"Photo:","label-for":"input-photo"}},[n("b-form-file",{attrs:{state:Boolean(t.contact.photo),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:t.contact.photo,callback:function(e){t.$set(t.contact,"photo",e)},expression:"contact.photo"}}),t._v(" "),t._l(t.errors,(function(e,o){return n("div",{key:o,staticClass:"invalid-feedback d-block"},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e(),t._v(" "),n("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit",disabled:o}},[t._v("\n          Save\n        ")])],1)]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,n){"use strict";n.r(e);var o=n(33),r=(n(84),{name:"EditContact",data:function(){return{contact:{}}},created:function(){this.getContact()},methods:{getContact:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/contact/".concat(t.$route.params.id));case 2:n=e.sent,t.contact=n.data;case 4:case"end":return e.stop()}}),e)})))()}}}),c=n(68),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row justify-content-center m-2"},[n("div",{staticClass:"col-lg-6 col-md-8 col-sm-12 p-2"},[n("FormContact",{attrs:{"contact-prop":t.contact},on:{"update:contactProp":function(e){t.contact=e},"update:contact-prop":function(e){t.contact=e}}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormContact:n(386).default})}}]);