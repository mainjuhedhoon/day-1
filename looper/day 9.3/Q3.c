#include <stdio.h>

//i = firrst
// j = last 
// n = input 

int main (){

int i ,n , j;



printf ("Enter any Number : ");
scanf ("%d",&n);

j = n % 10 ;

for ( ; n >= 10 ; n =  n / 10)
{
   
}
i = n;
printf ("i = %d\n", i);
printf ("j = %d\n", j);
printf ("sum  = %d\n", i + j );



    return 0;
}