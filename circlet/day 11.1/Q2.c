#include<stdio.h>
int main(){

//row = j
// coloum = i


int j , i;

for ( j = 4; j >=1; j--)
{
    for ( i = 1; i <=j; i++)
    {
        printf("*");
    }
   printf("\n"); 
}




    return 0;
}