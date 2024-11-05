// file.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
    FILE* open;
    char text[300];

    if (open == NULL) {
        printf("operazione non riuscita");
    }
    else
    {
        open = fopen("test.txt", "w");
    }

    fprintf(open, "hello world");
    
    fclose(open);
}