var minhaVar = 'Minha Variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
//ArrawFunction
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// var n1 = 'String';
// n1 = 4;
var n2 = 'String';
//n2 = 4; Error
var n3 = 'String';
n3 = 4;
