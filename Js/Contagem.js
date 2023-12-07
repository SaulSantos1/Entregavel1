const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor de N: ', (N) => {
    rl.question('Digite o primeiro número: ', (primeiroNumero) => {
        rl.question('Digite o conjunto de dados separado por espaços: ', (dadosInput) => {
            const dados = dadosInput.split(' ').map(Number);
            let count = 0;

            for (let i = 0; i < N; i++) {
                const numero = dados[i];
                if (numero >= primeiroNumero && numero <= N) {
                    count++;
                }
            }

            console.log(`Quantidade de números no intervalo: ${count}`);
            rl.close();
        });
    });
});
