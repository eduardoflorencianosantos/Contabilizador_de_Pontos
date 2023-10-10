function questionario() {
    var quantidade_respostas_corretas = 0;
    var perguntaUm = document.querySelector('input[name="resposta1"]:checked');
    var perguntaDois = document.querySelector('input[name="resposta2"]:checked');
    var perguntaTres = document.querySelector('input[name="resposta3"]:checked');
    var perguntaQuatro = document.querySelector('input[name="resposta4"]:checked');
    var perguntaCinco = document.querySelector('input[name="resposta5"]:checked');

    if (perguntaUm && perguntaDois && perguntaTres && perguntaQuatro && perguntaCinco) {
        if (perguntaUm.value === "correto") {
            quantidade_respostas_corretas++;
        }

        if (perguntaDois.value === "correto") {
            quantidade_respostas_corretas++;
        }

        if (perguntaTres.value === "correto") {
            quantidade_respostas_corretas++;
        }

        if (perguntaQuatro.value === "correto") {
            quantidade_respostas_corretas++;
        }

        if (perguntaCinco.value === "correto") {
            quantidade_respostas_corretas++;
        }

        document.getElementById("quantidade_de_acertos").innerHTML = "Você acertou " + quantidade_respostas_corretas + " questões!";
    }

    else {
        alert("Não deixe questões em branco!");
    }
}