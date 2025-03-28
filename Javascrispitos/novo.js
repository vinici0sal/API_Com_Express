import exp from 'express'
import colecao_uf from './funcao.js';
const data = new Date()

const app = exp();

app.get('/ufs', (req, res) =>{

    res.json(colecao_uf)
});

app.get('/ufs/:iduf', (req, res) => {

    const idUF = parseInt(req.params.iduf);
    const uf = colecao_uf.find(u => u.id === idUF)
    
    res.json(uf)
    console.log({'resposta' : res.statusCode})
})

app.listen(8080, () =>
    console.log(`Servidor iniciado as ${data.getHours()}:${data.getMinutes()}`)
)