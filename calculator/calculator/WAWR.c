#include <stdio.h>
int cube(int a);
int cube(int a)
{
    return a*a*a;
}
int main()
{
    printf("%d ",cube(5));
}