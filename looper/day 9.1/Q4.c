#include <stdio.h>

int main() {
    int n;
 


    printf("Enter any number: ");
    scanf("%d", &n);

    while(n >= 1) {
        if (n % 2 == 1)
        {
             printf("%d\n", n);
    
        }
            n--;
       
    }

    return 0;
}