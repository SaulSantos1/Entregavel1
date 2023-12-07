package Java;
public class Fibonacci {
    public static void calcularFibonacci(int n) {
        int primeiroTermo = 0;
        int segundoTermo = 1;
        System.out.print(primeiroTermo + " " + segundoTermo + " ");

        for (int i = 2; i < n; i++) {
            int proximoTermo = primeiroTermo + segundoTermo;
            System.out.print(proximoTermo + " ");
            primeiroTermo = segundoTermo;
            segundoTermo = proximoTermo;
        }
    }

    public static void main(String[] args) {
        int n = 8; // Substitua pelo número de termos da sequência que deseja calcular
        calcularFibonacci(n);
    }
}
