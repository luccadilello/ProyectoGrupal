const destinos = {
  "liniers": {
    nombre: "Liniers",
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
    nombre: "Aeroparque",
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
    nombre: "Constitución",
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
    nombre: "Estación Ezeiza",
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
const inputDestino = document.getElementById("destino");
const resultado = document.getElementById("resultado");

// Normaliza texto: minúsculas, sin acentos y sin espacios sobrantes
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

// Búsqueda parcial: encuentra una clave que contenga (o esté contenida en) lo escrito
function buscarDestino(consulta) {
  if (!consulta) return null;

  for (const clave in destinos) {
    const claveNorm = normalizar(clave);
    if (claveNorm.includes(consulta) || consulta.includes(claveNorm)) {
      return destinos[clave];
    }
  }
  return null;
}

function mostrarResultado() {
  const consulta = normalizar(inputDestino.value);

  resultado.style.display = "block";

  if (!consulta) {
    resultado.innerHTML = `
      <div class="card">
        <h3>Ingresá un destino</h3>
        <p>Escribí a dónde querés viajar para ver el transporte recomendado.</p>
      </div>`;
    return;
  }

  const info = buscarDestino(consulta);

  if (!info) {
    resultado.innerHTML = `
      <div class="card">
        <h3>No se encontró el destino</h3>
        <p>Probá con alguno de estos destinos disponibles:</p>
        <ul>
          <li>Liniers</li>
          <li>Aeroparque</li>
          <li>Constitución</li>
          <li>Estación Ezeiza</li>
        </ul>
      </div>`;
    return;
  }

  const chips = info.accesibilidad.map(item => `<li>${item}</li>`).join("");

  resultado.innerHTML = `
    <div class="route-box">
      <div class="route-header">
        <h3>Cómo llegar a ${info.nombre}</h3>
        <span class="badge">Recomendado</span>
      </div>
      <div class="route-grid">
        <div class="route-cell">
          <span class="label">Transporte</span>
          <span class="data">${info.transporte}</span>
        </div>
        <div class="route-cell">
          <span class="label">Sector / Andén</span>
          <span class="data">${info.sector}</span>
        </div>
        <div class="route-cell">
          <span class="label">Tiempo estimado</span>
          <span class="data">${info.tiempo}</span>
        </div>
        <div class="route-cell">
          <span class="label">Costo estimado</span>
          <span class="data">${info.costo}</span>
        </div>
        <div class="route-cell">
          <span class="label">Frecuencia</span>
          <span class="data">${info.frecuencia}</span>
        </div>
      </div>
      <div class="route-foot">
        <h4>Accesibilidad</h4>
        <ul class="chips">${chips}</ul>
      </div>
    </div>`;
}

boton.addEventListener("click", mostrarResultado);

// Permite buscar presionando Enter
inputDestino.addEventListener("keydown", (e) => {
  if (e.key === "Enter") mostrarResultado();
});
