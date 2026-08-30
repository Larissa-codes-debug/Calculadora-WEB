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

function executarCalculoIMC() {

    const peso = Number(
        document.getElementById("peso").value
    );

    const altura = Number(
        document.getElementById("altura").value
    );

    const resultado =
        document.getElementById("resultado-imc");


    // Validação dos dados
    if (
        peso <= 0 ||
        altura <= 0 ||
        Number.isNaN(peso) ||
        Number.isNaN(altura)
    ) {

        resultado.innerHTML =
            "Digite um peso e uma altura válidos.";

        return;
    }


    try {

        // Usa a função que está em src/imc.js
        const imc = calcularIMC(peso, altura);

        // Usa a classificação que está em src/imc.js
        const classificacao = classificarIMC(imc);

        let orientacao = "";


        // Orientação para obesidade
        if (imc >= 30 && imc < 35) {

            orientacao = `
                <br><br>

                <strong>Orientação:</strong><br>

                Recomendamos procurar um nutricionista
                para receber uma orientação alimentar
                adequada e conversar com profissionais
                de saúde sobre atividades físicas.
            `;

        } else if (imc >= 35 && imc < 40) {

            orientacao = `
                <br><br>

                <strong>Orientação:</strong><br>

                Recomendamos procurar um nutricionista
                para uma avaliação individualizada e
                conversar com profissionais de saúde
                antes de iniciar ou intensificar
                atividades físicas.
            `;

        } else if (imc >= 40) {

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

    } catch (erro) {

        resultado.innerHTML = erro.message;
    }
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