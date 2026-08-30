const { calcularIMC, classificarIMC } = require("../src/imc");

test("deve calcular o IMC corretamente", () => {
    const resultado = calcularIMC(70, 1.75);

    expect(resultado).toBeCloseTo(22.86, 2);
});

test("deve identificar abaixo do peso", () => {
    const resultado = calcularIMC(50, 1.75);

    expect(classificarIMC(resultado)).toBe(
        "Você está abaixo do peso."
    );
});

test("deve identificar peso adequado", () => {
    const resultado = calcularIMC(70, 1.75);

    expect(classificarIMC(resultado)).toBe(
        "Você está com o peso adequado."
    );
});

test("deve identificar sobrepeso", () => {
    const resultado = calcularIMC(80, 1.70);

    expect(classificarIMC(resultado)).toBe(
        "Você está com sobrepeso."
    );
});

test("deve identificar obesidade grau I", () => {
    const resultado = calcularIMC(90, 1.70);

    expect(classificarIMC(resultado)).toContain(
        "obesidade grau I"
    );
});

test("deve identificar obesidade grau II", () => {
    const resultado = calcularIMC(105, 1.70);

    expect(classificarIMC(resultado)).toContain(
        "obesidade grau II"
    );
});

test("deve identificar obesidade grau III", () => {
    const resultado = calcularIMC(120, 1.70);

    expect(classificarIMC(resultado)).toContain(
        "obesidade grau III"
    );
});

test("deve rejeitar peso inválido", () => {
    expect(() => calcularIMC(0, 1.75)).toThrow(
        "Peso ou altura inválidos."
    );
});

test("deve rejeitar altura inválida", () => {
    expect(() => calcularIMC(70, 0)).toThrow(
        "Peso ou altura inválidos."
    );
});