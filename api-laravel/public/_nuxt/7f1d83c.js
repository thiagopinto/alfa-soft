(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{283:function(n,t,e){n.exports=function(){"use strict";var n,t={name:"sr",messages:{_default:function(n){return"Поље "+n+" није валидно"},after:function(n,t){return"Поље "+n+" мора бити после "+t[0]},alpha:function(n){return"Поље "+n+" може садржати само слова"},alpha_dash:function(n){return"Поље "+n+" може садржати алфанумеричке карактере и повлаке"},alpha_num:function(n){return"Поље "+n+" може садржати само алфанумеричке карактере"},alpha_spaces:function(n){return"Поље "+n+" може садржати само алфанумеричке карактере и размаке"},before:function(n,t){return"Поље "+n+" мора бити пре "+t[0]},between:function(n,t){return"Поље "+n+" мора бити између "+t[0]+" и "+t[1]},confirmed:function(n){return"Потврда поља "+n+" се не поклапа"},credit_card:function(n){return"Поље "+n+" није валидно"},date_between:function(n,t){return"Поље "+n+" мора бити између "+t[0]+" и "+t[1]},date_format:function(n,t){return"Поље "+n+" мора бити у формату "+t[0]},decimal:function(n,t){void 0===t&&(t=[]);var e=t[0];return void 0===e&&(e="*"),"Поље "+n+" мора бити број и може садржати"+(e&&"*"!==e?" "+e:"")+" децималних места"},digits:function(n,t){return"Поље "+n+" мора бити број и садржати тачно "+t[0]+" цифара"},dimensions:function(n,t){return"Поље "+n+" мора бити "+t[0]+" x "+t[1]+" пиксела"},email:function(n){return"Поље "+n+" мора бити валидан имејл"},excluded:function(n){return"Поље "+n+" мора имати валидну вредност"},ext:function(n){return"Поље "+n+" мора бити валидан фајл"},image:function(n){return"Поље "+n+" мора бити слика"},included:function(n){return"Поље "+n+" мора бити валидна вредност"},ip:function(n){return"Поље "+n+' мора бити валидна "ај пи" адреса'},max:function(n,t){return"Поље "+n+" не сме бити дуже од "+t[0]+" карактера"},max_value:function(n,t){return"Поље "+n+" не сме бити веће од "+t[0]},mimes:function(n){return"Поље "+n+" мора бити валидан тип фајла"},min:function(n,t){return"Поље "+n+" мора садржати најмање "+t[0]+" карактера"},min_value:function(n,t){return"Поље "+n+" не сме бити мање од "+t[0]},numeric:function(n){return"Поље "+n+" мора бити број"},regex:function(n){return"Формат поља "+n+" није валидан"},required:function(n){return"Поље "+n+" је обавезно"},size:function(n,t){return"Поље "+n+" мора бити мање од "+function(n){var t=1024,e=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}(t[0])},url:function(n){return"Поље "+n+" није валидна веб адреса"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t}()}}]);