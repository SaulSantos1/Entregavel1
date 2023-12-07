public class CalculoMDC {
    public static int calcularMDC(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        int num1 = 48; // Substitua pelo primeiro número
        int num2 = 18; // Substitua pelo segundo número
        int mdc = calcularMDC(num1, num2);
        System.out.println("O MDC de " + num1 + " e " + num2 + " é " + mdc);
    }
}
