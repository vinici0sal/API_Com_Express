import exp from 'express'
import Soma_IMC from './new.js'
const data = new Date()

const app = exp();

app.get('/', (req, res) =>{

    let peso = req.query.peso;
    let altura = req.query.altura; 

    var Imc = Soma_IMC(peso, altura);

    res.send({IMC : Imc})

})

app.listen(8080, () =>
    console.log(`Servidor iniciado as ${data.getHours()}:${data.getMinutes()}`)
)