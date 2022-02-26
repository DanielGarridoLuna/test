const auth = firebase.auth();

var LoginBtn = document.querySelector('#btnlogin');

LoginBtn.addEventListener('click', e => {
    let email = document.getElementById('usser').value;
    let password = document.getElementById('pass').value;

    auth.signInWithEmailAndPassword(email, password).then(userCredential => {
            window.open("main.html", "_self");
        })
        .catch(function(error) {
            alert("Error de autentificación:" + error);
        });
})