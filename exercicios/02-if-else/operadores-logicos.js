console.log("Operadores lógicos:");

console.log("! = não (negação)");
console.log("&& = e (comparação)");
console.log("|| = ou (disjunção /n)");

const a = 5;
const b = 8;

if(a > b && b % 2 == 0){
    console.log("True");
} else{
    console.log("False");
}

if(a <= b || b / 2 == 2){
    console.log("True");
} else{
    console.log("False");
}