const destinos = {
  "liniers": {
    transporte: "Línea 8 Semirrápido",
    sector: "Terminal A - Ezeiza",
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
    transporte: "Servicio Ejecutivo Tienda León",
    sector: "Sector Ejecutivo",
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
    transporte: "Línea 51",
    sector: "Terminal C",
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
    transporte: "Línea 518",
    sector: "Puente 12",
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

const transporte = document.getElementById("transporte");
const sector = document.getElementById("sector");
const tiempo = document.getElementById("tiempo");
const costo = document.getElementById("costo");
const frecuencia = document.getElementById("frecuencia");
const accesibilidad = document.getElementById("accesibilidad");

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

    transporte.textContent = info.transporte;
    sector.textContent = info.sector;
    tiempo.textContent = info.tiempo;
    costo.textContent = info.costo;
    frecuencia.textContent = info.frecuencia;

    accesibilidad.innerHTML = info.accesibilidad
        .map(item => `<li>${item}</li>`)
        .join("");

});
