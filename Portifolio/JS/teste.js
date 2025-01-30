export var calculo = function(peso, altura){
    var Imc = peso / (altura * altura)
    return Imc;
}

export default calculo