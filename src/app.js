// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDmel8dt8ktsUN3zOMbcn7aYqd5hnP48uA',
  authDomain: 'insta-collage-2a550.firebaseapp.com',
  databaseURL: 'https://insta-collage-2a550.firebaseio.com',
  projectId: 'insta-collage-2a550',
  storageBucket: 'insta-collage-2a550.appspot.com',
  messagingSenderId: '923215499739'
};
firebase.initializeApp(config);

$(document).ready(function() {
  let $inputEmail = $('#exampleInputEmail');
  let $inputPassword = $('#exampleInputPassword');
  let btnSend = document.getElementById('btn-send');
  let btnEnter = document.getElementById('btn-enter');
  let btnGoogle = document.getElementById('btn-google');
  // Comprobando si lo ingresado es un correo electrónico
  $inputEmail.on('input', function() {
    console.log($(this).val());
    const PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    let $resultEmail = PATTERNEMAIL.test($(this).val());
    console.log($resultEmail);
  });

  $inputPassword.on('input', function(event) {
    console.log($(this).val());
    if ($(this).val().length >= 6 && $(this).val() !== '123456') {
      alert('Cumple');
      $inputPassword.addClass('has-success');
    } else {
      $inputPassword.addClass('has-error');
      alert('No cumple');
    }
  });
  
  btnSend.addEventListener('click', function() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() {
        authenticationUser();
        alert('Se registró correctamente');
      })  
    
      .catch(function(error) {
      // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      // ...
      });
  });

  btnEnter.addEventListener('click', function() {
    let enterEmail = document.getElementById('exampleInputEmail').value;
    let enterPassword = document.getElementById('exampleInputPassword').value;
    // let enterEmail = document.getElementById('enter-email').value;
    // let enterPassword = document.getElementById('enter-password').value;
    /* console.log(enterEmail);
     console.log(enterPassword); */
      
    /* Inicia sesión */
    firebase.auth().signInWithEmailAndPassword(enterEmail, enterPassword)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
    location.href = '../views/main-view.html';
    console.log('Accediste');
  });
  
  /* Función observador de inicio de sesión */
  function watcher() {
    firebase.auth().onAuthStateChanged(function(user) {
      /* El user pasará en elementUser */
      if (user) {
        elementSeen(user);
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        /* console.log(email);
         console.log(user); */
        console.log('***************');
        console.log(user.emailVerified);
        console.log('***************');
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        console.log('Existe usuario activo');
      } else {
        // User is signed out.
        console.log('No existe usuario activo');
        /* Se deja vacío para que no muestre nada en pantalla */
        elementSeen.innerHTML = '';
        
        // ...
      }
    });
  }
  watcher();

  /* Función de lo que verá el usuario activo */
  function elementSeen(user) {
    let userLog = user;
    let contentSee = document.getElementById('content');
    if (userLog.emailVerified) {
      console.log('cuenta verificada');
      // contentSee.innerHTML = `
      // <div class="container mt-5">
      // <div class="alert alert-success" role="alert">
      // <h4 class="alert-heading">Bienvenido! ${userLog.email}</h4>
      // <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      // <hr>
      // <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      // </div>
      // </div>
      // `;


      // <button class="btn btn-danger" id="btn-close">Cerrar Sesión</button>
      /* contentSee.innerHTML = '<div class="mt-3">Esto es parte de la sesion del usuario</div>';
        contentSee.innerHTML = 'Solo lo puede ver usuario activo'; */
      // close();
    } else {
      console.log('cuenta no verificada');
    }
  }

  /* Aquí estuvo función Close  */

  function authenticationUser() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      /* Email sent. */
      console.log('Enviando correo...');
    }).catch(function(error) {
      /* An error happened.*/
      console.log(error);
    });
  }

  /* Autenticación con Google */
  btnGoogle.addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });
  
  /* Redireccionando */
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});

