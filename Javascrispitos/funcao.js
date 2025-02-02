var peso;
var altura;

export var imc_pessoa = function(peso, altura)
{
    let imc = peso / (altura*altura)
    return imc;
}

export var status_imc = function(imc_pessoa)
{
    if(imc_pessoa <= 18.5){
        return "é baixo"
    }
    else if(imc_pessoa > 18.5 && imc_pessoa < 24)
    {
        return "Ta suave"
    }
    else
    {
        return "Ta acima do peso" 
    }
}

export var validacao_parametro = function(peso, altura)
{
    if(isNaN(peso && altura)){
        return false;
    }
    else{
        return true
    }
}


export default {status_imc, imc_pessoa, validacao_parametro}  