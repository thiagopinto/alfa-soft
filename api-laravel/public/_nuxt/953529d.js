(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{247:function(e,n,r){e.exports=function(){"use strict";var e,n={name:"ca",messages:{_default:function(e){return"El camp "+e+" no és vàlid"},after:function(e,n){return"El camp "+e+" ha de ser posterior a "+n[0]},alpha:function(e){return"El camp "+e+" només ha de contenir lletres"},alpha_dash:function(e){return"El camp "+e+" només ha de contenir lletres, números i guions"},alpha_num:function(e){return"El camp "+e+" només ha de contenir lletres i números"},alpha_spaces:function(e){return"El camp "+e+" només ha de contenir lletres i espais"},before:function(e,n){return"El camp "+e+" ha de ser anterior a "+n[0]},between:function(e,n){return"El camp "+e+" ha d'estar entre "+n[0]+" i "+n[1]},confirmed:function(e,n){return"El camp "+e+" no coincideix amb el camp "+n[0]},credit_card:function(e,n){return n[0],"El camp "+e+" és invàlid"},date_between:function(e,n){return"El camp "+e+" ha d'estar entre "+n[0]+" i "+n[1]},date_format:function(e,n){return"El camp "+e+" ha de tenir el format "+n[0]},decimal:function(e,n){void 0===n&&(n=[]);var r=n[0];return void 0===r&&(r="*"),"El camp "+e+" ha de ser numèric i contenir"+(r&&"*"!==r?" "+r:"")+" punts decimals"},digits:function(e,n){return"El camp "+e+" ha de ser numèric i contenir exactament "+n[0]+" dígits"},dimensions:function(e,n){return"El camp "+e+" ha de ser de "+n[0]+" píxels per "+n[1]+" píxels"},email:function(e){return"El camp "+e+" ha de ser un correu electrònic vàlid"},excluded:function(e){return"El camp "+e+" ha de ser un valor vàlid"},ext:function(e){return"El camp "+e+" ha de ser un fitxer vàlid"},image:function(e){return"El camp "+e+" ha de ser una imatge"},included:function(e){return"El camp "+e+" ha de ser un valor vàlid"},ip:function(e){return"El camp "+e+" ha de ser una adreça ip vàlida"},max:function(e,n){return"El camp "+e+" no ha de ser major a "+n[0]+" caràcters"},max_value:function(e,n){return"El camp "+e+" ha de ser de "+n[0]+" o menys"},mimes:function(e){return"El camp "+e+" ha de ser un tipus de fitxer vàlid"},min:function(e,n){return"El camp "+e+" ha de tenir almenys "+n[0]+" caràcters"},min_value:function(e,n){return"El camp "+e+" ha de ser de "+n[0]+" o superior"},numeric:function(e){return"El camp "+e+" ha de contenir només caràcters numèrics"},regex:function(e){return"El format del camp "+e+" no és vàlid"},required:function(e){return"El camp "+e+" és obligatori"},size:function(e,n){return"El camp "+e+" ha de ser menor a "+function(e){var n=1024,r=0==(e=Number(e)*n)?0:Math.floor(Math.log(e)/Math.log(n));return 1*(e/Math.pow(n,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}(n[0])},url:function(e){return"El camp "+e+" no és un URL vàlid"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n}()}}]);