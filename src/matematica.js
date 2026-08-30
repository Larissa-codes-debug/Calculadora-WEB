function calcularOperacao(numero1, numero2, operacao) {
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    operacao = String(operacao).trim().toLowerCase();

    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        throw new Error("Digite números válidos.");
    }

    switch (operacao) {
        case "soma":
        case "+":
            return numero1 + numero2;

        case "subtracao":
        case "-":
            return numero1 - numero2;

        case "multiplicacao":
        case "*":
            return numero1 * numero2;

        case "divisao":
        case "/":
            if (numero2 === 0) {
                throw new Error("Não é possível dividir por zero.");
            }
            return numero1 / numero2;

        case "potencia":
        case "**":
            return numero1 ** numero2;

        case "resto":
        case "%":
            if (numero2 === 0) {
                throw new Error("Não é possível calcular o resto com divisor zero.");
            }
            return numero1 % numero2;

        default:
            throw new Error("Operação inválida.");
    }
}

function calcularMath(numero, operacao) {
    numero = Number(numero);
    operacao = String(operacao).trim().toLowerCase();

    if (Number.isNaN(numero)) {
        throw new Error("Digite um número válido.");
    }

    switch (operacao) {
        case "raiz":
        case "raiz quadrada":
            if (numero < 0) {
                throw new Error("Não existe raiz quadrada real de número negativo.");
            }
            return Math.sqrt(numero);

        case "absoluto":
            return Math.abs(numero);

        case "arredondar":
            return Math.round(numero);

        case "teto":
            return Math.ceil(numero);

        case "chao":
        case "chão":
            return Math.floor(numero);

        default:
            throw new Error("Operação matemática inválida.");
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { calcularOperacao, calcularMath };
}

if (typeof window !== "undefined") {
    window.calcularOperacao = calcularOperacao;
    window.calcularMath = calcularMath;
}
