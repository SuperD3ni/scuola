// Puntatori a puntatori.cpp : Questo file contiene la funzione 'main', in cui inizia e termina l'esecuzione del programma.
//

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>


int main()
{
    int r, c, i, j, conta = 0;
    int** m;

    printf("Quante righe?");
    scanf("%d", &r);
    printf("Quante colonne?");
    scanf("%d", &c);

    m = (int**)calloc(r, sizeof(int*));
    for (i = 0; i < r; i++)
    {
        m[i] = (int*)calloc(c, sizeof(int));
        for (j = 0; j < c; j++)
        {
            m[i][j] = (++conta);
        }
    }

    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            printf("%d ", m[i][j]);
        }
        printf("\n");
    }

}