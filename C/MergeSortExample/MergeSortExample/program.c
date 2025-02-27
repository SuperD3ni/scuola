#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1; // limite array sinistro
    int n2 = r - m; // limite array destro

    // vengono creati gli array temporari
    int *L = (int *)malloc(n1 * sizeof(int));
    int *R = (int *)malloc(n2 * sizeof(int));

    // copia i dati negli array temporari
    for (i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }
    // riunisce gli array in arr[l..r]
    i = 0; // indice per l'array L (sinistro)
    j = 0; // indice per l'array R (destro)
    k = l; // indice per l'array principale (arr)
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // copia gli elementi rimanenti di L nel caso esistano
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // copia gli elementi rimanenti di R nel caso esistano
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

}

void mergeSort(int arr[], int l, int r) { // arr[] = array da ordinare, l = limite sinistro, r = limite destro
    if (l < r) {
        int m = l + (r - l) / 2;

        mergeSort(arr, l, m); // chiama ricorsivamente la meta sinistra dell'array (da l a m)
        mergeSort(arr, m + 1, r); // chiama ricorsivamente la meta destra dell'array (da m + 1 a r)

        merge(arr, l, m, r); // riunisce le due meta' riordinate
    }
}

// funzione che stampa un array
void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

// codice principale
int main() {
    int arr[] = {645, 1, 32, 55, 13, 7};
    int arr_size = 6;

    printf("Array normale \n");
    printArray(arr, arr_size);

    mergeSort(arr, 0, arr_size - 1);

    printf("\nArray riordinato \n");
    printArray(arr, arr_size);
    return 0;
}