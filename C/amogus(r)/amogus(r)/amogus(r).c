
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    char parola[4] = { 'C', 'I', 'A', 'O'};
    char lettera;

    printf("inserisci una lettera: ");
    scanf("%c", &lettera);

    for (int i = 0; i < 4; i++) {
        if (parola[i] == lettera) {
            printf("il piu prima che si vede %c e nel %d posto", lettera, i);
            i = 5;
        }
    }

    return 0;
}
