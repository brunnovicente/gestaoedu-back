import express from 'express'
const app = express()
const PORTA = 3000

app.use(express.json())

//ROTAS
app.get('/', (req, res)=>res.send('Batcaverna is Online!'))

import professor from "./routes/professor.js"
app.use('/professor', professor)

app.listen(PORTA, ()=> console.log('Servidor rodando em http://localhost:'+PORTA))