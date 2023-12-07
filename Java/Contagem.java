package Java;
import java.util.Scanner;

public class Contagem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor de N: ");
        int N = scanner.nextInt();

        System.out.print("Digite o primeiro número: ");
        int primeiroNumero = scanner.nextInt();

        System.out.print("Digite o conjunto de dados separado por espaços: ");
        int count = 0;

        for (int i = 0; i < N; i++) {
            int numero = scanner.nextInt();
            if (numero >= primeiroNumero && numero <= N) {
                count++;
            }
        }

        System.out.println("Quantidade de números no intervalo: " + count);
        scanner.close();
    }
}