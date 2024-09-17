
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>


int main()
{
    float n=0;
    float r=0;

    do
    {
        printf("inserisci numero: ");
        scanf("%f", &n);

        r += n;
    } while (r < 1000);

    printf("risultato finale: %f", r);
}
