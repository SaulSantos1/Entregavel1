function calcularMDC(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = 48; // Substitua pelo primeiro número
const num2 = 18; // Substitua pelo segundo número
const mdc = calcularMDC(num1, num2);
console.log(`O MDC de ${num1} e ${num2} é ${mdc}`);