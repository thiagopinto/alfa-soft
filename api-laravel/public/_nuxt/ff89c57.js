(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{278:function(e,n,r){e.exports=function(){"use strict";var e,n={name:"ro",messages:{after:function(e,n){return"Câmpul "+e+" trebuie să fie după "+n[0]},alpha:function(e){return"Câmpul "+e+" poate conține doar literele alfabetului"},alpha_dash:function(e){return"Câmpul "+e+' poate conține litere și caracterele "-" sau "_"'},alpha_num:function(e){return"Câmpul "+e+" poate conține doar caractere alfanumerice"},alpha_spaces:function(e){return"Câmpul "+e+" poate conține literele și spații"},before:function(e,n){return"Câmpul "+e+" trebuie să fie după "+n[0]},between:function(e,n){return"Valoare câmpului "+e+" trebuie să fie între "+n[0]+" și "+n[1]},confirmed:function(e){return"Câmpul "+e+" nu coincide"},credit_card:function(e){return"Valoarea câmpului "+e+" nu este un număr de card valid"},date_between:function(e,n){return"Data introdusă în "+e+" trebuie să fie între "+n[0]+" și "+n[1]},date_format:function(e,n){return"Respectați următorul format: "+n[0]+" în câmpul "+e},decimal:function(e,n){void 0===n&&(n=[]);var i=n[0];return void 0===i&&(i="*"),"Câmpul "+e+" trebuie să fie numberic și poate conține "+(i&&"*"!==i?" "+i:"")+" zecimale"},digits:function(e,n){return"Câmpul "+e+" trebuie să fie numeric și să conțină exact "+n[0]+" caractere"},dimensions:function(e,n){return"Câmpul "+e+" trebuie să fie "+n[0]+" pixeli lungime și "+n[1]+" pixeli înălțime"},email:function(e){return"Câmpul "+e+" trebuie să conțină un email valid"},excluded:function(e){return"Câmpul "+e+" trebuie să conțină o valoare validă"},ext:function(e){return"Câmpul "+e+" trebuie să fie un nume de fișier valid"},image:function(e){return"Câmpul "+e+" trebuie să fie o imagine"},included:function(e){return"Câmpul "+e+" trebuie să conțină o valoare validă"},ip:function(e){return"Câmpul "+e+" trebuie să conțină o adresă IP validă"},max:function(e,n){return"Câmpul "+e+" nu poate conține mai mult de "+n[0]+" caractere"},max_value:function(e,n){return"Valoarea câmpului "+e+" trebuie să fie maxim "+n[0]},mimes:function(e){return"Câmpul "+e+" trebuie să conțină un fișier cu extensie validă"},min:function(e,n){return"Câmpul "+e+" trebuie să conțină cel puțin "+n[0]+" caractere"},min_value:function(e,n){return"Valoarea câmpului "+e+" trebuie să fie mai mare de "+n[0]},numeric:function(e){return"Câmpul "+e+" poate conține doar valori numerice"},regex:function(e){return"Formatul câmpului "+e+" este invalid"},required:function(e){return"Câmpul "+e+" este obligatoriu"},size:function(e,n){return"Câmpul "+e+" nu trebuie să depășească "+function(e){var n=1024,i=0==(e=Number(e)*n)?0:Math.floor(Math.log(e)/Math.log(n));return 1*(e/Math.pow(n,i)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}(n[0])},url:function(e){return"Câmpul "+e+" nu este o adresă URL validă"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n}()}}]);