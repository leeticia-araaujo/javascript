console.log("Função Recursiva \n");

function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log("5! =", fatorial(5));

/* 
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4! = 120

n! = n x (n-1)!
1! = 1
*/