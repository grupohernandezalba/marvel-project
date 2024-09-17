console.log("Hola Mundo");

let sumar = 10 + 25;

console.log(sumar);

let a = 40;
let b = 20;

//Se multiplican las variables a por b 
const multiplicar = (a,b) => a * b {
    if (typeof a!== 'number'||
    typeof b !== 'number') {
        return 'Error: ambos parametros deben ser numeros'
    }

    const resultado = a * b;

    return 'El resultado de multiplicar ${a} por ${b} es ${resultado}';
};

console.log(multiplicar(5,3));

