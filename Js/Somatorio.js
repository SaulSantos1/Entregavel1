function calcularSomatorio(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

const numeros = [1, 2, 3, 4, 5]; // Substitua pelo conjunto de números que deseja somar
const resultado = calcularSomatorio(numeros);
console.log("O somatório é: " + resultado);