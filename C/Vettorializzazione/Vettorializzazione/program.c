#include "stdio.h"

int main(void)
{
	int arr[5] = { 1, 2, 3, 4 };
	for (int i = 0; i < 4; i++) {
		arr[i] = arr[i] * 2;
		printf("%d ", arr[i]);
	}
	return 0;
}