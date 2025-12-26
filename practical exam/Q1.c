#include <stdio.h>

int main()
{
    int m1, m2, m3, m4, m5;
    int total;
    float avg;

    printf("Enter marks of 5 subjects (out of 100):\n");
    scanf("%d %d %d %d %d", &m1, &m2, &m3, &m4, &m5);

    total = m1 + m2 + m3 + m4 + m5;
    avg = total / 5.0;

    printf("Average = %.2f\n", avg);

    if(avg >= 90)
        printf("Grade: A\n");
    else if(avg >= 75)
        printf("Grade: B\n");
    else if(avg >= 60)
        printf("Grade: C\n");
    else if(avg >= 40)
        printf("Grade: D\n");
    else
        printf("Grade: F\n");

    return 0;
}
