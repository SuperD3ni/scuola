#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    char v[6] = { 'P', 'A', 'T', 'A', 'T', 'A' };
    char risposta;
    int trovato = 0;

    do {
        printf("inserisci una lettera: ");
        scanf("%c", &risposta);

        for (int i = 0; i < 6; i++) {
            if (risposta == v[i]) {
                printf("la posizione piu' prima della lettera e' nel %d posto", i);
                trovato = 1;
                break;
            }
        }
    } while (trovato == 0);
}
