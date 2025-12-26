#include <stdio.h>

void printOdd(int a[], int n)
{
    int i;
    printf("Odd elements are:\n");
    for(i = 0; i < n; i++)
    {
        if(a[i] % 2 != 0)
        {
            printf("%d ", a[i]);
        }
    }
    printf("\n");
}

int main()
{
    int a[50], n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter array elements:\n");
    for(i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }

    printOdd(a, n);

    return 0;
}
