let altura;
let peso;


export var Soma_IMC = function(peso, altura){
    let Imc = peso / (altura*altura)
    return Imc
}

export default Soma_IMC