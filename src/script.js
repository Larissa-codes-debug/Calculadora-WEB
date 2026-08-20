function calcularIMC() {
    const peso = Number(
        document.getElementById("peso").value
    );

    const altura = Number(
        document.getElementById("altura").value
    );

    const resultado =
        document.getElementById("resultado");

    // Validação dos campos
    if (peso <= 0 || altura <= 0) {
        resultado.innerHTML =
            "Digite um peso e uma altura válidos.";
        return;
    }

    // Cálculo do IMC
    const imc = peso / (altura * altura);

    let classificacao;
    let orientacao = "";

    // Classificação do IMC
    if (imc < 18.5) {
        classificacao = "Magreza ou abaixo do peso.";

    } else if (imc <= 24.9) {
        classificacao = "Peso normal ou adequado.";

    } else if (imc <= 29.9) {
        classificacao = "Sobrepeso.";

    } else if (imc <= 34.9) {
        classificacao = "Obesidade grau I.";

        orientacao = `
            <br><br>
            <strong>Orientação:</strong><br>
            Recomendamos procurar um nutricionista
            para receber uma orientação alimentar
            adequada e conversar com um profissional
            de educação física para iniciar atividades
            físicas de forma segura.
        `;

    } else if (imc <= 39.9) {
        classificacao = "Obesidade grau II.";

        orientacao = `
            <br><br>
            <strong>Orientação:</strong><br>
            Recomendamos procurar um nutricionista
            para uma avaliação individualizada e
            conversar com um profissional de educação
            física antes de iniciar ou intensificar
            atividades físicas.
        `;

    } else {
        classificacao = "Obesidade grau III (grave).";

        orientacao = `
            <br><br>
            <strong>Orientação:</strong><br>
            Recomendamos procurar um nutricionista
            e um profissional de saúde para uma
            avaliação individualizada antes de iniciar
            atividades físicas. Um profissional de
            educação física também poderá orientar
            exercícios adequados às suas condições.
        `;
    }

    // Exibe o resultado
    resultado.innerHTML = `
        Seu IMC é: <strong>${imc.toFixed(2)}</strong>
        <br><br>
        Classificação: <strong>${classificacao}</strong>
        ${orientacao}
    `;
}