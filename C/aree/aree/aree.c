#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    float b;
    float h;
    float r;
    float a1;
    float a2;

    printf("inserisci la base del rettangolo: ");
    scanf("%f", &b);

    printf("inserisci l'altezza del rettangolo: ");
    scanf("%f", &h);

    a1 = b * h;

    printf("area del rettangolo: %f", a1);

    printf("\ninserisci il raggio del cerchio: ");
    scanf("%f", &r);

    a2 = 3.14 * r * r;

    printf("area del cerchio: %f", a2);

    if (a1 > a2)
    {
        printf("\nl'area del rettangolo e maggiore di quella del cerchio");
    }
    else if (a2 > a1)
    {
        printf("\nl'area del cerchio e maggiore di quella del rettangolo");
    }
    else
    {
        printf("\nle aree sono uguali");
    }
    return 0;
}