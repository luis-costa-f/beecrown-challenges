import java.util.Scanner;

public class Bee1002 {
    public static void main(String[] args) {
        double raio, area;
        Scanner scanner = new Scanner(System.in);

        raio = scanner.nextDouble();
        area = 3.14159 * (raio * raio);

        scanner.close();

        System.out.printf("A=%.4f\n", area);
    }
}