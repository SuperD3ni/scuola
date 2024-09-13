// operazioni.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    float a, b;
    int opzione;

    printf("inserisci il primo numero: ");
    scanf("%f", &a);
    printf("inserisci il secondo numero: ");
    scanf("%f", &b);

    printf("\n1) somma [%f + %f]", a, b);
    printf("\n2) differenza [%f - %f]", a, b);
    printf("\n3) prodotto [%f * %f]", a, b);
    printf("\n4) divisione [%f / %f]\n", a, b);
    scanf("%d", &opzione);

    switch (opzione)
    {
    case 1:
        printf("%f", a + b);
        break;
    case 2:
        printf("%f", a - b);
        break;
    case 3:
        printf("%f", a * b);
        break;
    case 4:
        printf("%f", a / b);
        break;
    default:
        printf("scelta non esitente");
    }


    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
