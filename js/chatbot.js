const botonChat = document.getElementById("enviar");
const respuesta = document.getElementById("respuesta");
const inputPregunta = document.getElementById("pregunta");

// Base de respuestas: cada entrada tiene palabras clave y su respuesta
const respuestas = [
  {
    claves: ["baño", "baños", "toilette", "sanitario"],
    texto: "Los baños están en las Terminales A, B y C, y funcionan las 24 hs."
  },
  {
    claves: ["comida", "comer", "gastronom", "restaurante", "cafe", "café", "bar"],
    texto: "Hay locales gastronómicos en las zonas de embarque y arribos, de 06:00 a 23:00 hs."
  },
  {
    claves: ["estacionamiento", "auto", "cochera", "parking"],
    texto: "El estacionamiento está en el sector externo del aeropuerto y funciona las 24 hs."
  },
  {
    claves: ["informacion", "información", "info", "consulta", "ayuda", "atencion", "atención"],
    texto: "Las oficinas de información están en el hall central y atienden las 24 hs."
  },
  {
    claves: ["horario", "horarios", "hora", "abierto"],
    texto: "La mayoría de los servicios funcionan las 24 hs; la gastronomía atiende de 06:00 a 23:00 hs."
  },
  {
    claves: ["espera", "asiento", "sentar", "sala"],
    texto: "Las áreas de espera están en todas las terminales, con asientos, climatización y carga de dispositivos."
  },
  {
    claves: ["transporte", "colectivo", "bus", "micro", "viajar", "llegar", "caba", "centro"],
    texto: "Para viajar usá la sección 'Consulta de viajes': te muestra transporte, sector de salida, tiempo y costo."
  },
  {
    claves: ["estacion", "estación", "tren", "518"],
    texto: "La Línea 518 conecta el aeropuerto con la estación de tren de Ezeiza desde el Puente 12."
  },
  {
    claves: ["accesib", "rampa", "silla", "discapacidad", "movilidad"],
    texto: "El centro cuenta con rampas, señalización clara y asistencia al pasajero. Más info en la sección Accesibilidad."
  }
];

function responder() {
  const pregunta = inputPregunta.value.toLowerCase().trim();

  if (!pregunta) {
    respuesta.innerHTML = "<p>Escribí una consulta para poder ayudarte 🙂</p>";
    return;
  }

  const encontrada = respuestas.find(r =>
    r.claves.some(clave => pregunta.includes(clave))
  );

  const mensaje = encontrada
    ? encontrada.texto
    : "No tengo esa información. Probá preguntar por: baños, comida, estacionamiento, información, horarios, áreas de espera o transporte.";

  respuesta.innerHTML = `<p>${mensaje}</p>`;
}

botonChat.addEventListener("click", responder);

inputPregunta.addEventListener("keydown", (e) => {
  if (e.key === "Enter") responder();
});
