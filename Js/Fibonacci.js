function calcularFibonacci(n) {
    let primeiroTermo = 0;
    let segundoTermo = 1;
    console.log(primeiroTermo + " " + segundoTermo);

    for (let i = 2; i < n; i++) {
        let proximoTermo = primeiroTermo + segundoTermo;
        console.log(proximoTermo + " ");
        primeiroTermo = segundoTermo;
        segundoTermo = proximoTermo;
    }
}

const n = 8; // Substitua pelo número de termos da sequência que deseja calcular
calcularFibonacci(n);
