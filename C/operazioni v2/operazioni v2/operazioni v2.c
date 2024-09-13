#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    float a, b;
    int opzione;

    do {
        printf("inserisci il primo numero: ");
        scanf("%f", &a);
        printf("inserisci il secondo numero: ");
        scanf("%f", &b);

        printf("\n1) somma [%f + %f]", a, b);
        printf("\n2) differenza [%f - %f]", a, b);
        printf("\n3) prodotto [%f * %f]", a, b);
        printf("\n4) divisione [%f / %f]", a, b);
        printf("\n0) chiusura programma\n");
        scanf("%d", &opzione);

        switch (opzione)
        {
        case 1:
            printf("%f\n", a + b);
            break;
        case 2:
            printf("%f\n", a - b);
            break;
        case 3:
            printf("%f\n", a * b);
            break;
        case 4:
            printf("%f\n", a / b);
            break;
        case 0:
            printf("chiusura programma...");
            break;
        default:
            printf("scelta non esitente\n");
        }
    } while (opzione != 0);

    return 0;
}