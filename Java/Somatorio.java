public class Somatorio {
    public static int calcularSomatorio(int[] numeros) {
        int soma = 0;
        for (int numero : numeros) {
            soma += numero;
        }
        return soma;
    }

    public static void main(String[] args) {
        int[] numeros = {1, 2, 3, 4, 5}; // Substitua pelo conjunto de números que deseja somar
        int resultado = calcularSomatorio(numeros);
        System.out.println("O somatório é: " + resultado);
    }
}