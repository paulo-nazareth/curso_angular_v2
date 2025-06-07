var minhaVar = 'Minha Variavel';

function minhaFunc(x, y){
    return x + y;
}

//ES 6 ou ES 2015
let num = 2;

const PI = 3.14;

//ArrawFunction
var numeros = [1,2,3];
numeros.map(function(valor){
    return valor * 2;
});

class Matematica{
    soma(x, y){
        return x + y;
    }
}

// var n1 = 'String';
// n1 = 4;

var n2: string = 'String';
//n2 = 4; Error

var n3: any = 'String';
n3 = 4;