
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

struct date
{
    char day;
    char month;
    int year;
};
struct person
{
    char firstname[10];
    char lastname[10];
    struct date birthday;
};

int main()
{
    int i = 0;
    char n = 1;
    struct person people[100];
    do {
        printf("1) aggiungi persona\n2) leggi da file\n3) visualizza dati dall array\n4) salva su file\n5) svuota file\n0) esci");
        scanf("%d", &n);
        switch (n)
        {
        case 1:
            printf("nome: ");
            scanf("%c", people.firstname[i]);
            printf("cognome: ");
            scanf("%c", people.lastname[i]);
            printf("giorno di nascita: ");
            scanf("%d", people.date[i].day);
            printf("mese di nascita: ");
            scanf("%d", people.date[i].month);
            printf("anno di nascita: ");
            scanf("%d", people.date[i].year);
        }
        i++;
    } while (n);
    return 0;
}
