const boton = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {

    const destino = document.getElementById("destino").value.toLowerCase().trim();

    if (destino === "") {
        resultado.style.display = "block";
        resultado.innerHTML = "<p>⚠️ Ingresá un destino.</p>";
        return;
    }

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h3>Resultado de búsqueda</h3>
        <p>Destino ingresado: <b>${destino}</b></p>
        <p>Aquí después vamos a mostrar el servicio recomendado, horarios, costo y accesibilidad.</p>
    `;
});
