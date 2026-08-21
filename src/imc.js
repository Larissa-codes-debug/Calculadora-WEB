function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        throw new Error("Peso ou altura inválidos.");
    }

    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Você está abaixo do peso.";
    }

    if (imc < 25) {
        return "Você está com o peso adequado.";
    }

    if (imc < 30) {
        return "Você está com sobrepeso.";
    }

    if (imc < 35) {
        return "Você está com obesidade grau I. É recomendado procurar orientação de um nutricionista e considerar a prática de atividade física em uma academia.";
    }

    if (imc < 40) {
        return "Você está com obesidade grau II. É recomendado procurar orientação de um nutricionista e considerar a prática de atividade física em uma academia.";
    }

    return "Você está com obesidade grau III. É recomendado procurar orientação de um nutricionista e considerar a prática de atividade física em uma academia.";
}

// Node.js
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        calcularIMC,
        classificarIMC
    };
}

// Navegador
if (typeof window !== "undefined") {
    window.calcularIMC = calcularIMC;
    window.classificarIMC = classificarIMC;
}