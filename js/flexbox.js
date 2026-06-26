const lenguajes = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Java"
];

const contenedor = document.getElementById("contenedorTarjetas");
const botonOrdenar = document.getElementById("btnOrdenar");

function mostrarTarjetas() {

    contenedor.innerHTML = "";

    lenguajes.forEach(lenguaje => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <h3>${lenguaje}</h3>
            <p>Lenguaje de programación o tecnología.</p>
        `;

        contenedor.appendChild(tarjeta);

    });

}

mostrarTarjetas();

botonOrdenar.addEventListener("click", () => {

    lenguajes.sort();

    mostrarTarjetas();

});