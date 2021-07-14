const btnInformatica = document.getElementById("btnInformatica");
const btnTelefonia = document.getElementById("btnTelefonia");
const btnVideojuegos = document.getElementById("btnVideojuegos");
const btnVigilancia = document.getElementById("btnVigilancia");

function redirect(url){
    window.location.href = url;
}

btnInformatica.addEventListener("click", () => redirect("informatica.html"));
btnTelefonia.addEventListener("click", () => redirect("telefonia.html"));
btnVideojuegos.addEventListener("click", () => redirect("videojuegos.html"));
btnVigilancia.addEventListener("click", () => redirect("vigilancia.html"));
