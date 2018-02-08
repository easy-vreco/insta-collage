/* VERSIÓN 1 */
$(document).ready(function() {
  let $inputEmail = $('#exampleInputEmail');
  let $inputPassword = $('#exampleInputPassword');
  // Comprobando si lo ingresado es un correo electrónico
  $inputEmail.on('input', function() {
    console.log($(this).val());
    const PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    let $result = PATTERNEMAIL.test($(this).val());
    console.log($result);
  });

  $inputPassword.on('input', function(event) {
    console.log($(this).val());
    if ($(this).val().length >= 6) {
      debugger;
      $('#register-form-group').addClass('has-success');
    } else {
      $('#register-form-group').addClass('has-error');
    }
  });
});

