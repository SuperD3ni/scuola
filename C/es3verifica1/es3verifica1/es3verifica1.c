// fatto da Michelangelo Fantinati //

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int valutazioni[10][10] = { {5,7,8,5,7,4,6,7,9,7},{4,5,6,8,9,4,3,6,7,8},{7,8,9,6,5,8,9,7,8,10},{5,7,8,9,5,6,7,4,6,7},{5,7,8,5,7,4,6,7,9,7},{3,5,4,6,4,5,6,3,2,4},{4,5,6,8,9,4,3,6,7,8},{7,8,9,6,5,8,9,7,8,10},{3,5,4,6,4,5,6,3,2,4},{4,5,6,8,9,4,3,6,7,8} };
    char alunni[10];
    int somma = 0;
    float media;
    int i;

    for (i = 0; i < 10; i++) {

        somma = 0;
        for (int j = 0; j < 10; j++) {
            somma += valutazioni[i][j];
        }

        media = somma / 10;


        if (media < 6) {
            alunni[i] = 'B';
        }
        else {
            alunni[i] = 'P';
        }
    }


    printf("Risultati degli alunni:\n");
    for (int a = 0; a < 10; a++) {
        printf("Alunno: %c\n", alunni[a]);
    }

    return 0;




}