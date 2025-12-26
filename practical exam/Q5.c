#include <stdio.h>

int main() {
    int i, j, start;
    int n = 5; 

    for(i = 1; i <= n; i++) {

        for(j = 1; j <= n - i; j++) {
            printf(" "); 
        }

        start = 10 - n + i;

        for(j = start; j <= 10; j++) {
            printf("%d", j);
            if(j != 10) {
                printf(" ");
            }
        }

        printf("\n");
    }

    return 0;
}
