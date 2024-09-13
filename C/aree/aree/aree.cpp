#define _CRT_SECURE_NO_WARNINGS
#include <iostream>

int main()
{
    float b;
    float h;
    float a1;
    float r;
    float a2;

    printf("inserisci la base");
    scanf("%f", &b);

    printf("inserisci l'altezza");
    scanf("%f", &h);

    a1 = b * h;

    printf("inserisci il raggio");
    scanf("%f", &r);

    a2 = r * r * 3.14;

    printf("area del rettangolo: %f area del cerchio %f", a1, a2);

    if (a1 > a2) {
        printf("l'area del rettangolo e maggiore di quella del cerchio");
    }
    
    else {
        printf("l'area del cerchio e maggiore di quella del rettangolo");
    }

}