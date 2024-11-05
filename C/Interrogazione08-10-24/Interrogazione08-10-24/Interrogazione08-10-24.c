#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int v[100];
    int n;
    int x;
    int prog = 1;


    printf("inserisci il numero dei numeri (massimo 100): ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("inserisci un numero: ");
        scanf("%d", &x);
        v[i] = x;
    }

    x = v[0] - v[1];

    for (int i = 0; i < n-1; i++) {
        
        if (v[i] - v[i + 1] != x) {
            printf("non e' una progressione aritmetica");
            prog = 0;
               break;
        }
    }

    if (prog == 1) {
        printf("e' una progressione aritmetica");
    }

    return 0;
}
