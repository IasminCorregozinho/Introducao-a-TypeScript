const prompt = require("prompt-sync")();

let real: number = Number(prompt("Valor em Reais R$: ").replace(",", "."));
let dolar: number = Number(prompt("Cotação atual do Dólar: ").replace(",", "."));
console.log("Valor em Dólares: U$", (real / dolar).toFixed(2));
// R$ 1000 ÷ 4,95