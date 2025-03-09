#include <stdio.h>

typedef int (*miafunzione)(int);

int quadrato(int a) { return (a * a); }
int incrementa(int a) { return (a + 1); }
int doppio(int a) { return (2 * a); }

void operazione_su_array(int* A, int dim, miafunzione fz) {
    for (int i = 0; i < dim; i++) A[i] = fz(A[i]);
}

void visualizza_array(int* A, int dim) {
    printf("{");
    for (int i = 0; i < dim; i++)
    {
        printf("%d", A[i]);
        if (i < dim - 1) printf(", ");
    }
    printf("}");
}

int main()
{
    int n = 4;
    int A[] = { 1,2,3,4 };

    operazione_su_array(A, n, &quadrato);
    printf("Array con quadrati: ");
    visualizza_array(A, n);
    operazione_su_array(A, n, &incrementa);
    printf("\nArray con incrementi: ");
    visualizza_array(A, n);
    operazione_su_array(A, n, &doppio);
    printf("\nArray con doppi: ");
    visualizza_array(A, n);

}