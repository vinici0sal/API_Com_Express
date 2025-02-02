import exp from 'express'
import { imc_pessoa, status_imc, validacao_parametro } from './funcao.js';

const app = exp();

var data = new Date();
    app.get('/', (req, res) => { 

        var peso = req.query.peso
        var altura = req.query.altura

        var imc = imc_pessoa(peso, altura)
        var status = status_imc(imc)
        var validar = validacao_parametro(peso, altura)
        
        console.log({imc : imc}, {status : status}, {validar : validar})

    })
    
    app.listen(8080, () => {
        let min = data.getMinutes()
        let date = data.getHours() + ':' + min; 
        console.log(`Servidor conectado as ${date}` )
        }
    )
