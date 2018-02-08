// function close() {
window.addEventListener('load', function() {
  // function close() {
  var btnClose = document.getElementById('btn-close');
  console.log(btnClose);
  btnClose.addEventListener('click', function() {
    // event.preventDefault();
    firebase.auth().signOut()
      .then(function() {
        location.href = '../index.html';
        console.log('Saliendo ...');
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  // }
});