/* Arreglo de imágenes para el slider de inicio */
const imgs = [
"images/fotografia-destacada.jpg",
"images/fotografia-destacada-1.jpg",
"images/fotografia-destacada-2.jpg",
"images/fotografia-destacada-3.jpg"
];

let j = 0;
const slider = document.getElementById("slider-img");

/* Control manual de navegación: Siguiente */
document.querySelector(".next").onclick = () => {
    j = (j + 1) % imgs.length;
    slider.src = imgs[j];
};

/* Control manual de navegación: Anterior */
document.querySelector(".prev").onclick = () => {
    j = (j - 1 + imgs.length) % imgs.length;
    slider.src = imgs[j];
};

/* Requisito: Implementación de intervalo automático */
setInterval(() => {
    j = (j + 1) % imgs.length;
    slider.src = imgs[j];
}, 5000);

/* Requisito: Eventos mouseover y mouseout para el menú */
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => { link.style.color = "#EF4135"; });
    link.addEventListener('mouseout', () => { link.style.color = ""; });
});

/* Requisito: Mensaje dinámico en el DOM según la hora del día */
window.onload = () => {
    const ahora = new Date().getHours();
    const titulo = document.querySelector(".intro-texto h2");
    let saludo = ahora < 12 ? "¡Bonjour!" : "¡Bonsoir!";
    titulo.innerText = saludo + " " + titulo.innerText;
};