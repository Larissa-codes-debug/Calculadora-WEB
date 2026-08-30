const { calcularOperacao, calcularMath } = require("../src/matematica");

test("deve somar dois números", () => {
    expect(calcularOperacao(10, 5, "+")).toBe(15);
});

test("deve subtrair dois números", () => {
    expect(calcularOperacao(10, 5, "-")).toBe(5);
});

test("deve multiplicar dois números", () => {
    expect(calcularOperacao(10, 5, "*")).toBe(50);
});

test("deve dividir dois números", () => {
    expect(calcularOperacao(10, 2, "/")).toBe(5);
});

test("deve calcular potenciação", () => {
    expect(calcularOperacao(2, 3, "**")).toBe(8);
});

test("deve calcular resto", () => {
    expect(calcularOperacao(10, 3, "%")).toBe(1);
});

test("não deve permitir divisão por zero", () => {
    expect(() => calcularOperacao(10, 0, "/")).toThrow("dividir por zero");
});

test("deve usar Math.sqrt", () => {
    expect(calcularMath(25, "raiz")).toBe(5);
});

test("deve usar Math.abs", () => {
    expect(calcularMath(-10, "absoluto")).toBe(10);
});

test("deve rejeitar texto", () => {
    expect(() => calcularOperacao("abc", 2, "+")).toThrow("números válidos");
});
