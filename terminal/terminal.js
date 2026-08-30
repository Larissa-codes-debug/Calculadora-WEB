const readline = require("readline");
const { calcularIMC, classificarIMC } = require("../src/imc");
const { calcularOperacao, calcularMath } = require("../src/matematica");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta.trim());
        });
    });
}

async function calculadoraMatematica() {
    console.log("\n--- CALCULADORA MATEMÁTICA ---");

    const numero1Informado = await perguntar("Primeiro número: ");
    const numero2Informado = await perguntar("Segundo número: ");

    const numero1 = parseFloat(numero1Informado);
    const numero2 = parseFloat(numero2Informado);

    if (
        numero1Informado === "" ||
        numero2Informado === "" ||
        Number.isNaN(numero1) ||
        Number.isNaN(numero2)
    ) {
        console.log("Digite números válidos.");
        return;
    }

    console.log("\nOperações:");
    console.log("1 - Soma (+)");
    console.log("2 - Subtração (-)");
    console.log("3 - Multiplicação (*)");
    console.log("4 - Divisão (/)");
    console.log("5 - Potenciação (**)");
    console.log("6 - Resto (%)");

    const opcao = await perguntar("Escolha uma operação: ");

    const operacoes = {
        "1": "soma",
        "2": "subtracao",
        "3": "multiplicacao",
        "4": "divisao",
        "5": "potencia",
        "6": "resto"
    };

    const operacao = operacoes[opcao];

    if (!operacao) {
        console.log("Opção inválida.");
        return;
    }

    try {
        const resultado = calcularOperacao(numero1, numero2, operacao);
        console.log(`Resultado: ${resultado.toFixed(2)}`);
    } catch (erro) {
        console.log(erro.message);
    }
}

async function calculadoraMathTerminal() {
    console.log("\n--- FUNÇÕES DO OBJETO MATH ---");

    const numeroInformado = await perguntar("Digite um número: ");
    const numero = parseFloat(numeroInformado);

    if (numeroInformado === "" || Number.isNaN(numero)) {
        console.log("Digite um número válido.");
        return;
    }

    console.log("\n1 - Raiz quadrada");
    console.log("2 - Valor absoluto");
    console.log("3 - Arredondar");
    console.log("4 - Arredondar para cima");
    console.log("5 - Arredondar para baixo");

    const opcao = await perguntar("Escolha uma função: ");

    const operacoes = {
        "1": "raiz",
        "2": "absoluto",
        "3": "arredondar",
        "4": "teto",
        "5": "chao"
    };

    const operacao = operacoes[opcao];

    if (!operacao) {
        console.log("Opção inválida.");
        return;
    }

    try {
        const resultado = calcularMath(numero, operacao);
        console.log(`Resultado: ${resultado.toFixed(2)}`);
    } catch (erro) {
        console.log(erro.message);
    }
}

async function calculadoraIMC() {
    console.log("\n--- CALCULADORA DE IMC ---");

    const pesoInformado = await perguntar("Digite seu peso em kg: ");
    const alturaInformada = await perguntar("Digite sua altura em metros: ");

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
        console.log("Peso ou altura inválidos.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
    console.log(classificarIMC(imc));

    const orientacao = imc >= 30
        ? "Orientação: procure um nutricionista e profissionais de saúde para orientação individualizada."
        : "Orientação adicional não necessária para esta classificação.";

    console.log(orientacao);
}

async function verificarAnoBissexto() {
    console.log("\n--- ANO BISSEXTO ---");

    const anoInformado = await perguntar("Digite um ano: ");
    const ano = Number(anoInformado);

    if (
        anoInformado === "" ||
        Number.isNaN(ano) ||
        !Number.isInteger(ano) ||
        ano <= 0
    ) {
        console.log("Digite um ano válido.");
        return;
    }

    const bissexto =
        ano % 400 === 0 ||
        (ano % 4 === 0 && ano % 100 !== 0);

    console.log(
        bissexto
            ? `${ano} é um ano bissexto.`
            : `${ano} não é um ano bissexto.`
    );
}

async function menu() {
    let continuar = true;

    while (continuar) {
        console.log("\n==============================");
        console.log("       CALCULADORA WEB");
        console.log("==============================");
        console.log("1 - Calculadora de IMC");
        console.log("2 - Verificador de ano bissexto");
        console.log("3 - Calculadora matemática");
        console.log("4 - Funções Math");
        console.log("5 - Sair");

        const opcao = await perguntar("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                await calculadoraIMC();
                break;
            case "2":
                await verificarAnoBissexto();
                break;
            case "3":
                await calculadoraMatematica();
                break;
            case "4":
                await calculadoraMathTerminal();
                break;
            case "5":
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Escolha de 1 a 5.");
        }
    }

    rl.close();
    console.log("Programa encerrado.");
}

menu();
