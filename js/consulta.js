const destinos = {
  "liniers": {
    servicio: "Línea 8 Semirrápido",
    plataforma: "Terminal A - Ezeiza",
    tiempo: "45 minutos",
    costo: "$1.200",
    accesibilidad: [
      "Piso bajo",
      "Rampas",
      "Aire acondicionado",
      "Espacio para equipaje"
    ],
    frecuencia: "Cada 15-20 minutos"
  },

  "aeroparque": {
    servicio: "Servicio Ejecutivo Tienda León",
    plataforma: "Sector Ejecutivo",
    tiempo: "1h 20min",
    costo: "$16.000",
    accesibilidad: [
      "Espacios para silla de ruedas",
      "Señalización clara",
      "Asistencia al pasajero"
    ],
    frecuencia: "Cada 1 hora"
  },

  "constitucion": {
    servicio: "Línea 51",
    plataforma: "Terminal C",
    tiempo: "60-90 minutos",
    costo: "Tarifa SUBE",
    accesibilidad: [
      "Rampas",
      "Asientos prioritarios",
      "Piso bajo en unidades"
    ],
    frecuencia: "Alta frecuencia"
  },

  "ezeiza estacion": {
    servicio: "Línea 518",
    plataforma: "Puente 12",
    tiempo: "25-35 minutos",
    costo: "Tarifa SUBE",
    accesibilidad: [
      "Piso bajo",
      "Rampas",
      "Espacio para equipaje"
    ],
    frecuencia: "15-20 minutos"
  }
};
const boton = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {

    const destino = document
        .getElementById("destino")
        .value
        .toLowerCase()
        .trim();

    const info = destinos[destino];

    resultado.style.display = "block";

    if (!info) {
        resultado.innerHTML = `
            <h3>❌ No se encontró el destino</h3>
            <p>Probá con:</p>
            <ul>
                <li>Liniers</li>
                <li>Aeroparque</li>
                <li>Constitución</li>
                <li>Ezeiza estacion</li>
            </ul>
        `;
        return;
    }

    resultado.innerHTML = `
        <h3>✔ Resultado encontrado</h3>

        <p><b>Servicio:</b> ${info.servicio}</p>
        <p><b>Plataforma:</b> ${info.plataforma}</p>
        <p><b>Tiempo estimado:</b> ${info.tiempo}</p>
        <p><b>Costo:</b> ${info.costo}</p>
        <p><b>Frecuencia:</b> ${info.frecuencia}</p>

        <h4>Accesibilidad</h4>
        <ul>
            ${info.accesibilidad.map(a => `<li>${a}</li>`).join("")}
        </ul>
    `;
});
