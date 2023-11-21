#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double r, area;
    cin >> r;

    area = 3.14159 * (r * r);

    cout << "A=" << fixed << setprecision(4) << area << endl;
}