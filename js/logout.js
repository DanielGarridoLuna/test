const auth = firebase.auth();

/////Cerrar Sesion
var OutBtn = document.querySelector('#btnout');
OutBtn.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.open("index.html", "_self");

    })
})