import exp from 'express'
import { readBuilderProgram } from 'typescript';

const app = exp();
var data = new Date();

app.get('/', (req, res) => {
    var altura = req.query.altura;
    var peso = req.query.peso;

    let imc = peso / (altura * altura);

    res.json({imc : imc});
})

app.listen(8080, () => {
    let min = data.getMinutes()
    let date = data.getHours() + ':' + min; 
    console.log(`Servidor conectado as ${date} da manhã` )
    }
)