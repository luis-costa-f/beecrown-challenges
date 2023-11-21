import java.util.Scanner;

public class Bee1003 {
    public static void main(String[] args) {
        int x, y;        
        Scanner scanner = new Scanner(System.in);

        x = scanner.nextInt();
        y = scanner.nextInt();

        scanner.close();
        
        System.out.println("SOMA = " + (x + y));
    }
}