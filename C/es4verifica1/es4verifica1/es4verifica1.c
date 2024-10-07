// fatto da Michelangelo Fantinati //

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
	int m[4][4];


	for (int i = 0; i < 4; i++)
	{


		for (int j = 0; j < 4; j++)
		{
			printf("Inserire un valore:");
			scanf("%d", &m[i][j]);
		}


	}

	for (int i = 0; i < 4; i++)
	{


		for (int j = 0; j < 4; j++)
		{
			printf("%d ", m[j][i]);
		}
		printf("\n");

	}
}