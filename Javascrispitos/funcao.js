var peso;
var altura;

export var funcao_soma = function(peso, altura){
    let imc = peso / (altura*altura)
    return imc;
}


export default funcao_soma(peso, altura)


