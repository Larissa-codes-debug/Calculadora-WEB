const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu peso em kg: ", (pesoInformado) => {

    rl.question("Digite sua altura em metros: ", (alturaInformada) => {

        const peso = Number(pesoInformado);
        const altura = Number(alturaInformada);

        if (peso <= 0 || altura <= 0) {
            console.log("Peso ou altura inválidos.");
            rl.close();
            return;
        }

        const imc = peso / (altura * altura);

        console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);

        if (imc < 18.5) {
            console.log("Você está abaixo do peso.");
        } else if (imc >= 18.5 && imc < 25) {
            console.log("Você está com o peso adequado.");   
        } else {
            console.log("Você está acima ou dentro do peso adequado.");
        }

        rl.close();
    });
});