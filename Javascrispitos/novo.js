import exp from 'express'
import { funcao_soma } from './funcao.js';

const app = exp();

var data = new Date();
    app.get('/', (req, res) => {
        
        var peso = req.query.peso
        var altura = req.query.altura

        var imc = peso + altura
        
        console.log({imc : imc })

    })
    
    app.listen(8080, () => {
        let min = data.getMinutes()
        let date = data.getHours() + ':' + min; 
        console.log(`Servidor conectado as ${date} da manhã` )
        }
    )
