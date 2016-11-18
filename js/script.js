//$(document).ready(function() {

  jQuery(document).ready(function($) {
   
    $(".top-form").validate({
     rules: {
       name: { required: true},
       phone: { required: true},
       email: { required: true},
       message: { required: true},
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      
      $.ajax({
        type: 'POST',
        url: 'sendmessage.php',
        data: forma.serialize(),
        success: function(data) {$('.top-form1 ').find('input').val('');
        if(data == "true") {
          $.fancybox.close()
          $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p></div>',
            {
              'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none',
              afterClose  : function() {
                location.href = "index.html";
              }
            }
            );
          setTimeout("$.fancybox.close()", 4000);
        }
      }
    });
    },
    success: function() {
     
    },
    highlight: function(element, errorClass) {
      $(element).addClass('error');
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
    }
  });
    
    $(".top-form1").validate({
     rules: {
       name: { required: true},
       phone: { required: true},
       email: { required: true},
       message: { required: true},
     },
     messages: {

     },
     errorPlacement: function(error, element) {

     },
     submitHandler: function(form) {
      var forma =$(form);
      
      $.ajax({
        type: 'POST',
        url: 'sendmessage.php',
        data: forma.serialize(),
        success: function(data) {$('.top-form1 ').find('input').val('');
        if(data == "true") {
          $.fancybox.close()
          $.fancybox(
            '<div class="titler"><p>Ваша заявка успешно отправлена!</p></div>',
            {
              'autoDimensions'  : false,
              'width'             : 350,
              'height'            : 'auto',
              'transitionIn'    : 'none',
              'transitionOut'   : 'none',
              afterClose  : function() {
                location.href = "index.html";
              }
            }
            );
          setTimeout("$.fancybox.close()", 5000);
        }
      }
    });
    },
    success: function() {
     
    },
    highlight: function(element, errorClass) {
      $(element).addClass('error');
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error');
    }
  });

    

    
  });