const formulario = document.getElementById("formPersona");
const tabla = document.getElementById("tablaPersonas");

const personas = [];

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        altura: altura,
        peso: peso
    };

    personas.push(persona);

    mostrarPersonas();

    formulario.reset();

});

function mostrarPersonas() {

    tabla.innerHTML = "";

    personas.forEach(function (persona, indice) {

        const fila = document.createElement("tr");

        const imc = (persona.peso / (persona.altura * persona.altura)).toFixed(2);

        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.altura}</td>
            <td>${persona.peso}</td>
            <td>${imc}</td>
            <td>
                <button onclick="eliminarPersona(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);

    });

}

function eliminarPersona(indice) {

    personas.splice(indice, 1);

    mostrarPersonas();

}