#define _CRT_SECURE_NO_WARNINGS
#include "stdio.h"

int InserisciTesto(void) {
	char p[100];
	printf("Inserire testo: ");
	scanf("%s", &p);
	FILE* f;
	f = fopen("C:/Users/denis/source/repos/SuperD3ni/scuola/COutput/FileEx1.txt", "a");
	if (f == NULL)
	{
		printf("esploso");
	}
	fprintf(f, "%s\n", p);
	fclose(f);
	return 0;
}

int main(void)
{
	int n;
	do
	{
		printf("1) Inserire testo nel file\n2) Numero di parole contenute nel file\n3) Numero di caratteri contenuti nel file\n4) Numeri di righe del file\n5) Esci\n");
		scanf("%d", &n);
		switch (n)
		{
		case 1:
			InserisciTesto();
		}
	} while (n != 5);
}

