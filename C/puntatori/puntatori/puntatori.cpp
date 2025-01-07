#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int* p;

    p = (int*)malloc(sizeof(int)); //alloca il numero dei byte che servono ad un int al puntatore

    *p = 5; //cambia il valore che sta puntando

    return 0;
}