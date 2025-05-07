function calcularImpuestos() {
    const ingresos = parseFloat(document.getElementById('ingresos').value);
    const gastos = parseFloat(document.getElementById('gastos').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(ingresos) || isNaN(gastos)) {
        resultado.innerHTML = "<p>Por favor, ingrese valores válidos para ingresos y gastos.</p>";
        return;
    }

    const iva = ingresos * 0.13;
    const it = ingresos * 0.03;
    const utilidad = ingresos - gastos;
    const iue = utilidad > 0 ? utilidad * 0.25 : 0;

    resultado.innerHTML = `
        <p><strong>IVA (13%):</strong> Bs ${iva.toFixed(2)}</p>
        <p><strong>IT (3%):</strong> Bs ${it.toFixed(2)}</p>
        <p><strong>IUE (25% sobre utilidad):</strong> Bs ${iue.toFixed(2)}</p>
    `;
}

function consultarFecha() {
    const nit = document.getElementById('nit').value.trim();
    const resultadoFecha = document.getElementById('resultado-fecha');

    if (!/^\d+$/.test(nit)) {
        resultadoFecha.innerHTML = "<p>Ingrese un NIT válido (solo números).</p>";
        return;
    }

    const ultimoDigito = parseInt(nit[nit.length - 1]);
    const fechas = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

    const fechaDeclaracion = fechas[ultimoDigito];

    resultadoFecha.innerHTML = `<p>La fecha límite de declaración es el día <strong>${fechaDeclaracion}</strong> de cada mes.</p>`;
}

  