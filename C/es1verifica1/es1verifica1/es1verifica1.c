// fatto da Michelangelo Fantinati //

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    char v[10] = { 'S', 'G', 'A', 'B', 'U', 'Z', 'Z', 'I', 'N', 'O' };
    char occorrenza;
    printf("Inserisci una lettera maiuscola: ");
    scanf("%c\n", &occorrenza);

    for (int i = 0; i < 10; i++)
    {
        if (v[i] == occorrenza) {
            printf("La prima occorrenza della lettera si trova alla posizione: %d\n", &i);
            break;
        }

        else if (v[i] != occorrenza) {
            printf("La prima occorrenza della lettera si trova alla posizione - 1");
            break;
        }
    }
    
    return 0;
}