import exp from 'express'
import read from 'readline-sync'
import calculo  from './teste.js';

const app = exp();
var data = new Date();

let resposta = read.question("Gostaria de iniciar quais das apis? ")

if(resposta == "1"){

    app.get('/', (req, res) => {
    
        var altura = req.query.altura;
        var peso = req.query.peso;
    
        var restul = calculo(peso, altura)
    
        console.log({imc : restul});
    })
    
    app.listen(8080, () => {
        let min = data.getMinutes()
        let date = data.getHours() + ':' + min; 
        console.log(`Servidor conectado as ${date} da manhã` )
        }
    )
}

else if(resposta == "2"){
    app.get('/', (req, res) => {
    
        var altura = req.query.altura;
        var peso = req.query.peso;
    
        let imc = peso / (altura * altura);
    
        res.json({imc : imc})
    })
    
    app.listen(8080, () => {
        let min = data.getMinutes()
        let date = data.getHours() + ':' + min; 
        console.log(`Servidor conectado as ${date} da manhã` )
        }
    )
}