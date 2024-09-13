// giorni.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    int giorno;

    printf("inserisci un giorno della settimana\n1 - Lun 2 - Mar 3 - Mer 4 - Gio 5 - Ven 6 - Sab 7 - Dom");
    scanf("%d", &giorno);

    switch (giorno)
    {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        printf("giorno lavorativo");
        break;
    case 6:
        printf("sabato");
        break;
    case 7:
        printf("domenica");
        break;
    default:
        printf("opzione non valida");
    }
    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
