#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int e1;
    int e2;
    int i;

    printf("primo estremo: ");
    scanf("%d", &e1);
    printf("secondo estremo: ");
    scanf("%d", &e2);
    i = e1;

    do
    {
        if (i % 2 == 0) 
        {
            printf("%d\n", i);
        }
        i += 1;
    } while (i <= e2);

    return 0;
}
