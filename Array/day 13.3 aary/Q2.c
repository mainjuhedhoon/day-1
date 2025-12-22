#include <stdio.h>

int main() {
    int arr[2][3];
    int i, j;

    printf("Enter elements of 2D array:\n");

    for(i = 0; i < 2; i++) {
        for(j = 0; j < 3; j++) {
            scanf("%d", &arr[i][j]);
        }
    }

    printf("2D Array is:\n");

    for(i = 0; i < 2; i++) {
        for(j = 0; j < 3; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}
