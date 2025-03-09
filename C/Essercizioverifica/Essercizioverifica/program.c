#define _CRT_SECURE_NO_WARNINGS
#include "stdlib.h"
#include "stdio.h"

//Scrivete una funzione con prototipo void scambia( int *p, int *q ) che scambi i valori delle due variabili puntate da p e q.
/*
void scambia(int* p, int* q)
{
	int n = *p;
	*p = *q;
	*q = n;
}

int main(void)
{
	int p;
	int q;
	printf("inserisci p\n");
	scanf("%d", &p);
	printf("inserisci q\n");
	scanf("%d", &q);
	printf("p = %d\nq = %d\n", p, q);
	scambia(&p, &q);
	printf("p = %d\nq = %d", p, q);
	return 0;
}
*/

// Scrivete una funzione con prototipo int lung_stringa( char *s ) che, data una stringa s, ne calcoli la lunghezza. 
// Provate a scrivere il programma usando un puntatore a carattere per scorrere la string


int main(void)
{
	int l, n;
	char* str;
	printf("inserisci lunghezza\n");
	scanf("%d", &l);
	str = (char*)malloc(sizeof(char) * l);
	for (int i = 0; i < l; i++)
	{
		printf("inserisci lettera\n");
		scanf(" %c", &n);
		str[i] = n;
	}

	printf("lunghezza: %d", lung_stringa(str));
}