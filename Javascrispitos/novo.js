import exp, { json } from 'express'
import { list } from './new.js';
import qrcode from 'qrcode-terminal'

const app = exp();

var data = new Date();
    app.get('/', (req, res) => { 
        
        res.json(list)

    })
    
    app.listen(8080, () => {
        let min = data.getMinutes()
        let date = data.getHours() + ':' + min; 
        console.log(`Servidor conectado as ${date}` )
        }
    )
