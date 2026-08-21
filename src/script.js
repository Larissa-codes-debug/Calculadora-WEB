/* =====================================
   TROCAR ENTRE AS CALCULADORAS
===================================== */

function mostrarCalculadora(tipo) {

    const calculadoraIMC =
        document.getElementById("calculadora-imc");

    const calculadoraBissexto =
        document.getElementById("calculadora-bissexto");

    const botoes =
        document.querySelectorAll(".botao-menu");


    // Remove a classe ativo dos botões
    botoes.forEach(function (botao) {
        botao.classList.remove("ativo");
    });


    if (tipo === "imc") {

        calculadoraIMC.classList.remove("escondida");

        calculadoraBissexto.classList.add("escondida");

        botoes[0].classList.add("ativo");

    } else {

        calculadoraIMC.classList.add("escondida");

        calculadoraBissexto.classList.remove("escondida");

        botoes[1].classList.add("ativo");
    }
}


/* =====================================
   CALCULADORA DE IMC
===================================== */

function calcularIMC() {

    const peso = Number(
        document.getElementById("peso").value
    );

    const altura = Number(
        document.getElementById("altura").value
    );

    const resultado =
        document.getElementById("resultado-imc");


    // Validação
    if (peso <= 0 || altura <= 0) {

        resultado.innerHTML =
            "Digite um peso e uma altura válidos.";

        return;
    }


    // Cálculo
    const imc =
        peso / (altura * altura);


    let classificacao;
    let orientacao = "";


    // Classificação
    if (imc < 18.5) {

        classificacao =
            "Magreza ou abaixo do peso.";

    } else if (imc <= 24.9) {

        classificacao =
            "Peso normal ou adequado.";

    } else if (imc <= 29.9) {

        classificacao =
            "Sobrepeso.";

    } else if (imc <= 34.9) {

        classificacao =
            "Obesidade grau I.";

        orientacao = `
            <br><br>
            <strong>Orientação:</strong><br>
            Recomendamos procurar um nutricionista
            para receber uma orientação alimentar
            adequada e conversar com profissionais
            de saúde sobre atividades físicas.
        `;

    } else if (imc <= 39.9) {

        classificacao =
            "Obesidade grau II.";

        orientacao = `
            <br><br>
            <strong>Orientação:</strong><br>
            Recomendamos procurar um nutricionista
            para uma avaliação individualizada e
            conversar com profissionais de saúde
            antes de iniciar ou intensificar
            atividades físicas.
        `;

    } else {

        classificacao =
            "Obesidade grau III (grave).";

        orientacao = `
            <br><br>
            <strong>Orientação:</strong><br>
            Recomendamos procurar um profissional
            de saúde para uma avaliação individualizada
            antes de iniciar atividades físicas.
        `;
    }


    // Exibe resultado
    resultado.innerHTML = `
        Seu IMC é:
        <strong>${imc.toFixed(2)}</strong>

        <br><br>

        Classificação:
        <strong>${classificacao}</strong>

        ${orientacao}
    `;
}


/* =====================================
   VERIFICADOR DE ANO BISSEXTO
===================================== */

function verificarBissexto() {

    const ano =
        Number(document.getElementById("ano").value);

    const resultado =
        document.getElementById("resultado-bissexto");


    // Validação
    if (!Number.isInteger(ano) || ano <= 0) {

        resultado.innerHTML =
            "Digite um ano válido.";

        return;
    }


    // Verifica se o ano é bissexto
    const ehBissexto =
        (ano % 400 === 0) ||
        (ano % 4 === 0 && ano % 100 !== 0);


    let mensagem;


    if (ehBissexto) {

        mensagem = `
            <strong>${ano}</strong>
            é um ano bissexto.
        `;

    } else {

        mensagem = `
            <strong>${ano}</strong>
            não é um ano bissexto.
        `;
    }


    // Procura o próximo ano bissexto
    let proximoAno = ano + 1;


    while (
        !(
            proximoAno % 400 === 0 ||
            (
                proximoAno % 4 === 0 &&
                proximoAno % 100 !== 0
            )
        )
    ) {
        proximoAno++;
    }


    // Exibe resultado
    resultado.innerHTML = `
        ${mensagem}

        <br><br>

        O próximo ano bissexto será:

        <strong>${proximoAno}</strong>
    `;
}