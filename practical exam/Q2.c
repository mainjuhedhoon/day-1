#include <stdio.h>

float average(int a[10][10], int r, int c)
{
    int i, j, sum = 0;

    for(i = 0; i < r; i++)
    {
        for(j = 0; j < c; j++)
        {
            sum = sum + a[i][j];
        }
    }

    return (float)sum / (r * c);
}

int main()
{
    int a[10][10], r, c, i, j;
    float avg;

    printf("Enter number of rows and columns: ");
    scanf("%d %d", &r, &c);

    printf("Enter elements of the array:\n");
    for(i = 0; i < r; i++)
    {
        for(j = 0; j < c; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }

    avg = average(a, r, c);

    printf("Average of all elements = %.2f\n", avg);

    return 0;
}
