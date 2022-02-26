const db = firebase.firestore();

function Leer(){
    let tablaprod = document.getElementById('tabla');
    db.collection("Productos").onSnapshot((querySnapshot) => {
        tablaprod.innerHTML = '';
        querySnapshot.forEach((doc) => {
            tablaprod.innerHTML += `
        <tr>
        <td>${doc.id}</td>
        <td>${doc.data().Producto}</td>
        <td>$${doc.data().Precio}</td>
        <td>${doc.data().Existencia} piezas</td>
        </tr>
        `
        });
    });
}