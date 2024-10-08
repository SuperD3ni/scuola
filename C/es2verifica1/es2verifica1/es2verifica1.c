// fatto da Michelangelo Fantinati //

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    float v[10] = { 15.4, 16.2, 17.0, 17.5, 17.7, 18.0, 18.4, 18.6, 18.9, 19.2 };
    float tempi[9];


    for (int i = 0; i < 9; i++) {
        tempi[i] = v[i + 1] - v[i];
    }


    printf("Tempi di arrivo:\n");
    for (int i = 0; i < 10; i++) {
        printf("%f ", v[i]);
    }
    printf("\n");

    printf("Differenze di tempo tra uno studente e l'altro:\n");
    for (int i = 0; i < 9; i++) {
        printf("%f ", tempi[i]);
    }
    printf("\n");

    return 0;
}