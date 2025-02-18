import exp from 'express'
import colecao_uf from './funcao.js';
const data = new Date()

const app = exp();

app.get('/ufs', (req, res) =>{

    colecao_uf(colecao_uf)
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    const uf = colecao_uf.find(u => u.id === idUF);

    console.log({"Código de status" : res.statusCode})
    console.log(uf)
})

app.listen(8080, () =>
    console.log(`Servidor iniciado as ${data.getHours()}:${data.getMinutes()}`)
)