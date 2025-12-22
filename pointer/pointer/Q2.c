#include <stdio.h>

int main() {
    int a;
    int *p;
    int **pp;

    
    printf("Enter a number: ");
    scanf("%d", &a);

    p = &a;    
    pp = &p;   

    
    printf("Value of a: %d\n", a);
    printf("Using pointer p: %d\n", *p);
    printf("Using pointer to pointer pp: %d\n", **pp);

    return 0;
}
