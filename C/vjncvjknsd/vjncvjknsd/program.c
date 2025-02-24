#define _CRT_SECURE_NO_WARNINGS
#include "stdlib.h"
#include "stdio.h"

void separa_array(int* v, int n, int* positivi, int* negativi) {
    for (int i = 0; i < n; i++) 
    {
        if (v[i] >= 0) 
        {
            positivi[i] = v[i];
            negativi[i] = 0;
        }
        else 
        {
            positivi[i] = 0;
            negativi[i] = v[i];
        }
    }
}

int main() {
    int vett[] = { 1,-5,0,-4,1 };
    int i, positivi[5], negativi[5];
    separa_array(vett, 5, positivi, negativi);
    printf("Positivi: {");
    for (i = 0; i < 5; i++)
    {
        printf("%d", positivi[i]);
        if (i < 4) printf(", ");
    }
    printf("}");
    printf("\nNegativi: {");
    for (i = 0; i < 5; i++)
    {
        printf("%d", negativi[i]);
        if (i < 4) printf(", ");
    }
    printf("}");
}