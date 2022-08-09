jQuery(document).ready(function($) {
  "use strict";
  //Contact
  $('form.contactForm').submit(function() {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            } 
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            } 
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            } 
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }
        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    
    if (ferror) return false;
    else var str = $(this).serialize();
    
    var action = $(this).attr('action');
    if( ! action ) {
      
      function QueryString(key,str) {  
        var qsParamsArray = str.split("&");  
        for (var i=0;i<qsParamsArray.length;i++) {  
          var strKey = qsParamsArray[i].split("=");  
          if (strKey[0] == key) {return strKey[1];}  
        }  
      }  
     
      var nombre=QueryString("entry.776567834",str);
      var correo=QueryString("entry.188883293",str);
      var subject=QueryString("entry.983544519",str);
      var mensaje=QueryString("entry.1464843118",str);
      
      var url="https://docs.google.com/forms/d/e/1FAIpQLScucrkgmDWDuwDZXkihrCcOFbKaYWWqTR9Eu__cOcqtIwSd0A/formResponse?usp=pp_url&" +str
     
     var envio=$.post(url,function(){  
        $('#sendmessage').show()
     })
     .fail(function() {
      $('#sendmessage').show()
     })
 
  };
    return false;
  });
  
});
