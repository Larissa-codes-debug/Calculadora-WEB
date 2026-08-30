/* =====================================
   MENU DAS CALCULADORAS
===================================== */

function mostrarCalculadora(tipo) {
    const calculadoras = {
        imc: document.getElementById("calculadora-imc"),
        bissexto: document.getElementById("calculadora-bissexto"),
        matematica: document.getElementById("calculadora-matematica")
    };

    const botoes = document.querySelectorAll(".botao-menu");

    Object.values(calculadoras).forEach(function (calculadora) {
        calculadora.classList.add("escondida");
    });

    botoes.forEach(function (botao) {
        botao.classList.remove("ativo");
    });

    if (calculadoras[tipo]) {
        calculadoras[tipo].classList.remove("escondida");
    }

    const ordem = ["imc", "bissexto", "matematica"];
    const indice = ordem.indexOf(tipo);

    if (indice >= 0 && botoes[indice]) {
        botoes[indice].classList.add("ativo");
    }
}

/* =====================================
   CALCULADORA DE IMC
===================================== */

function executarCalculoIMC() {
    const pesoInformado = document.getElementById("peso").value.trim();
    const alturaInformada = document.getElementById("altura").value.trim();
    const resultado = document.getElementById("resultado-imc");

    const peso = parseFloat(pesoInformado);
    const altura = parseFloat(alturaInformada);

    if (
        pesoInformado === "" ||
        alturaInformada === "" ||
        Number.isNaN(peso) ||
        Number.isNaN(altura) ||
        peso <= 0 ||
        altura <= 0
    ) {
        resultado.innerHTML = "Digite um peso e uma altura válidos.";
        return;
    }

    try {
        const imc = calcularIMC(peso, altura);
        const classificacao = classificarIMC(imc);

        const orientacao = imc >= 30
            ? "<br><br><strong>Orientação:</strong><br>Recomendamos procurar um nutricionista e profissionais de saúde para orientação individualizada sobre alimentação e atividade física."
            : "";

        resultado.innerHTML = `
            Seu IMC é: <strong>${imc.toFixed(2)}</strong>
            <br><br>
            Classificação: <strong>${classificacao}</strong>
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
    const anoInformado = document.getElementById("ano").value.trim();
    const resultado = document.getElementById("resultado-bissexto");
    const ano = Number(anoInformado);

    if (
        anoInformado === "" ||
        Number.isNaN(ano) ||
        !Number.isInteger(ano) ||
        ano <= 0
    ) {
        resultado.innerHTML = "Digite um ano válido.";
        return;
    }

    const ehBissexto =
        ano % 400 === 0 ||
        (ano % 4 === 0 && ano % 100 !== 0);

    const mensagem = ehBissexto
        ? `<strong>${ano}</strong> é um ano bissexto.`
        : `<strong>${ano}</strong> não é um ano bissexto.`;

    let proximoAno = ano + 1;

    while (
        !(
            proximoAno % 400 === 0 ||
            (proximoAno % 4 === 0 && proximoAno % 100 !== 0)
        )
    ) {
        proximoAno++;
    }

    resultado.innerHTML = `
        ${mensagem}
        <br><br>
        O próximo ano bissexto será: <strong>${proximoAno}</strong>
    `;
}

/* =====================================
   CALCULADORA MATEMÁTICA
===================================== */

function executarCalculoMatematico() {
    const valor1 = document.getElementById("numero1").value.trim();
    const valor2 = document.getElementById("numero2").value.trim();
    const operacao = document.getElementById("operacao-matematica").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado-matematica");

    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);

    if (
        valor1 === "" ||
        valor2 === "" ||
        Number.isNaN(numero1) ||
        Number.isNaN(numero2)
    ) {
        resultado.innerHTML = "Digite dois números válidos.";
        return;
    }

    try {
        const calculo = calcularOperacao(numero1, numero2, operacao);

        resultado.innerHTML = `
            Resultado:
            <strong>${calculo.toFixed(2)}</strong>
            <br><br>
            Expressão:
            <strong>${numero1} ${operacao} ${numero2}</strong>
        `;
    } catch (erro) {
        resultado.innerHTML = erro.message;
    }
}

function executarMath() {
    const valor = document.getElementById("numero-math").value.trim();
    const operacao = document.getElementById("operacao-math").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado-math");

    const numero = parseFloat(valor);

    if (valor === "" || Number.isNaN(numero)) {
        resultado.innerHTML = "Digite um número válido.";
        return;
    }

    try {
        const calculo = calcularMath(numero, operacao);

        resultado.innerHTML = `
            Resultado de <strong>Math</strong>:
            <strong>${calculo.toFixed(2)}</strong>
        `;
    } catch (erro) {
        resultado.innerHTML = erro.message;
    }
}

/* Aula 04: Date para trabalhar com o ano atual sem fixá-lo no código. */
function obterAnoAtual() {
    const dataAtual = new Date();
    return dataAtual.getFullYear();
}

/* Inicia a aplicação mostrando a primeira calculadora. */
mostrarCalculadora("imc");
