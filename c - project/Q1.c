#include <stdio.h>
int main(){
float c, f;
printf("The temperature in celcius:");
scanf("%f",&c);

f = (9.0 / 5.0 * c)+32;
printf("The temperature in Fahrenheint:%f\n",f);

    return  0;
}