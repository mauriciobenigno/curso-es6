// Usando o método comum
function soma(a=3,b=6)
{
    return a+b;
}
// usando Arrow function
const soma2 = (a = 3, b = 6) => a + b ;

//console.log(soma(1));
//console.log(soma());

console.log(soma2(1));
console.log(soma2());

