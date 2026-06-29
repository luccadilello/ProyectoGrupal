const botonChat = document.getElementById("enviar");
const respuesta = document.getElementById("respuesta");

botonChat.addEventListener("click", () => {

    const pregunta = document
        .getElementById("pregunta")
        .value
        .toLowerCase()
        .trim();

    let mensaje = "";

    if (pregunta.includes("baño")) {
        mensaje = "Los baños están en todas las terminales y funcionan 24 hs.";
    }
    else if (pregunta.includes("comida") || pregunta.includes("gastronomía")) {
        mensaje = "Hay locales gastronómicos en zonas de embarque y arribos.";
    }
    else if (pregunta.includes("estacionamiento")) {
        mensaje = "El estacionamiento está en el sector externo y funciona 24 hs.";
    }
    else {
        mensaje = "No tengo esa información. Probá preguntar por baños, comida o estacionamiento.";
    }

    respuesta.innerHTML = `<p>${mensaje}</p>`;
});
