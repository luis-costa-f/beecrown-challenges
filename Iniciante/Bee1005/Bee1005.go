package main

import "fmt"

func main() {
	var x, y, media float64

	fmt.Scanf("%f", &x)
	fmt.Scanf("%f", &y)
	media = ((x * 3.5) + (y * 7.5)) / 11.0

	fmt.Printf("MEDIA = %.5f\n", media)
}
