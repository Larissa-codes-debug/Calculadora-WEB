const readline = require("readline");

const { calcularIMC, classificarIMC } = require("../src/imc");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu peso em kg: ", (pesoInformado) => {

    rl.question("Digite sua altura em metros: ", (alturaInformada) => {

        const peso = Number(pesoInformado);
        const altura = Number(alturaInformada);

        if (peso <= 0 || altura <= 0 || Number.isNaN(peso) || Number.isNaN(altura)) {
            console.log("Peso ou altura inválidos.");
            rl.close();
            return;
        }

        const imc = calcularIMC(peso, altura);

        console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);
        console.log(classificarIMC(imc));

        rl.close();
    });
});