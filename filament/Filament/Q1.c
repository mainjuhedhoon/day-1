#include <stdio.h>
#include <string.h>

int main()
{
    char a[50];

    printf("Enter your name: ");
    scanf("%s", a);

    int length = strlen(a);
    printf("LENGTH OF NAME IS %d\n", length);

    return 0;
}
