#include <stdio.h>
#include <string.h>

int main()
{
    char name1[50];
    char name2[50];
    char name3[100];

    printf("Enter your name1:\n");
    scanf("%s", name1);

    printf("Enter your name2:\n");
    scanf("%s", name2);

    strcpy(name3, name1);  
    strcat(name3, name2);   

    printf("Combined name: %s\n", name3);

    return 0;
}
