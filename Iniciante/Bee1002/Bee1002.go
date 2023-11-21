package main

import "fmt"

func main() {
	var r, area float64

	fmt.Scanf("%f", &r)

	area = (r * r) * 3.14159

	fmt.Printf("A=%.4f\n", area)
}
