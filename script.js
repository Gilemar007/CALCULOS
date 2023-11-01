function calcular() {
    var n1 = parseFloat(document.getElementById('valor1').value);
    var n2 = parseFloat(document.getElementById('valor2').value);
    var radio = document.querySelector('input[class="radio"]:checked');
    var res = document.getElementById('res');

    if (radio) {
        if (radio.id === "opc1") {
            res.textContent = n1 + n2;
        } else if (radio.id === "opc2") {
            res.textContent = n1 - n2;
        } else if (radio.id === "opc3") {
            res.textContent = n1 * n2;
        } else if (radio.id === "opc4") {
            res.textContent = n1 / n2;
        } else if (radio.id === "opc5") {
            res.textContent = n1 * 1.3;
        }
        
        radio.checked = false;
    } else {
        res.textContent = "Selecione uma operação";
    }
}
