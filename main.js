function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    if (isNaN(campoA) || isNaN(campoB)) {
        document.getElementById("mensagem").innerHTML = "Por favor, preencha ambos os campos com números válidos.";
    } else if (campoB > campoA) {
        document.getElementById("mensagem").innerHTML = "Formulário válido!";
    } else {
        document.getElementById("mensagem").innerHTML = "Formulário inválido!";
    }
}