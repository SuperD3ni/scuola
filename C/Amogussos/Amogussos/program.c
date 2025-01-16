#define _CRT_SECURE_NO_WARNINGS
#include "stdio.h"
#include "stdlib.h"

struct datanascita {
	int giorno;
	int mese;
	int anno;
};

int main(void)
{

	//DATE DI NASCITA

	/*struct datanascita* p;
	int n;

	printf("inserire numero di persone\n");
	scanf("%d", &n);
	
	//p = (struct  datanascita*)malloc(sizeof(struct datanascita) * n);
	p = (struct  datanascita*)calloc(n,sizeof(struct datanascita));

	for (int i = 0; i < n; i++) {
		printf("giorno persona %d\n", i + 1);
		scanf("%d", &p[i].giorno);
		printf("mese persona %d\n", i + 1);
		scanf("%d", &p[i].mese);
		printf("anno persona %d\n", i + 1);
		scanf("%d", &p[i].anno);
	}

	for (int i = 0; i < n; i++) {
		printf("%d-%d-%d\n", p[i].giorno, p[i].mese, p[i].anno);
	}*/

	//TEST INDIRIZZI DIVERSI

	int* a, * b;

	a = (int)malloc(sizeof(int));
	b = (int)malloc(sizeof(int));

	printf("%d\n", a);
	printf("%d", b);
}
