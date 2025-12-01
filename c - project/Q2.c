#include <stdio.h>
int main(){
float base;
float hra;
float da;
float ta;

printf("base salary;");
scanf("%f",&base);

printf("hra:");
scanf("%f",&hra);

printf("da:");
scanf("%f",&da);

printf("ta:");
scanf("%f",&ta);

 float grosssalary = base + (base * hra/ 100) + (base * da/ 100) +(base * ta/ 100);
printf("gross salary:%f",grosssalary);
    return 0;
}