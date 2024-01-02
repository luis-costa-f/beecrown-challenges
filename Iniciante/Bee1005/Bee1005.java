import java.util.Scanner;

public class Bee1005 {
    public static void main(String[] args) {
        double a, b, media;
        Scanner scanner = new Scanner(System.in);

        a = scanner.nextDouble();
        b = scanner.nextDouble();        
        scanner.close();
	    media = ((a * 3.5) + (b * 7.5)) / 11.0;              

        System.out.printf("MEDIA =%.5f\n", media);
    }
}