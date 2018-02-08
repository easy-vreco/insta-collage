/* VERSIÓN 1 */
$(document).ready(function() {
  let $inputEmail = $('#exampleInputEmail');
  let $inputPassword = $('#exampleInputPassword');
  // Comprobando si lo ingresado es un correo electrónico
  $inputEmail.on('input', function() {
    console.log($(this).val());
    const PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    let $resultEmail = PATTERNEMAIL.test($(this).val());
    console.log($resultEmail);
  });

  $inputPassword.on('input', function(event) {
    console.log($(this).val());
    /* const PATTERNPASSWORD = /^[\d]{6,}$/;
    const PATTERNNUMBERS = /[0-9]/g;
    let $resultPassword1 = PATTERNPASSWORD.test($(this).val());
    // let $resultPassword2 = PATTERNNUMBERS.test($(this).val());
    console.log($resultPassword1);
    // console.log($resultPassword2);*/
    let $arrayOfCharacters = $(this).val().join();
    $arrayOfCharacters.sort(compare);
    var compare = function(st, nd) {
      return a - b;
    };
    console.log(compare());
    if ($(this).val().length >= 6) {
      /* No se añaden los estilos - Comprobar*/ 
      alert('Cumple');
      $inputPassword.addClass('has-success');
    } else {
      $inputPassword.addClass('has-error');
      alert('No cumple');
    }
  });
});

