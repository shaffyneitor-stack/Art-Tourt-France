/* Arreglo de imágenes para la galería del museo */
const museoImgs = [
"images/museo-1.jpg",
"images/museo-2.jpg",
"images/museo-3.jpg",
"images/museo-4.jpg"
];

let i = 0;
const museo = document.getElementById("museo-img");

/* Navegación manual: Siguiente imagen */
document.querySelector(".next").onclick = () => {
    i = (i + 1) % museoImgs.length;
    museo.src = museoImgs[i];
};

/* Navegación manual: Imagen anterior */
document.querySelector(".prev").onclick = () => {
    i = (i - 1 + museoImgs.length) % museoImgs.length;
    museo.src = museoImgs[i];
};

/* Requisito: Cambio automático de imágenes con setInterval */
setInterval(() => {
    i = (i + 1) % museoImgs.length;
    museo.src = museoImgs[i];
}, 4000);

/* Requisito: Interactividad en los enlaces de navegación */
const linksMuseo = document.querySelectorAll('nav ul li a');
linksMuseo.forEach(link => {
    link.onmouseover = () => link.style.fontWeight = "bold";
    link.onmouseout = () => link.style.fontWeight = "";
});

/* Requisito: Manipulación del DOM para cambio de idioma */
document.getElementById('idioma').addEventListener('change', function() {
    const tituloMuseo = document.querySelector('.bloque-titulo');
    if(this.value === "EN") {
        tituloMuseo.innerText = "Louvre Museum";
    } else {
        tituloMuseo.innerText = "Museo del Louvre";
    }
});