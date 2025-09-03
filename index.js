import express from 'express'
import cors from 'cors';

const app = express()
const PORTA = 3000

// app.use(cors({
//     origin: 'http://localhost:5174',          // origem do seu Vite
//     methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
//     allowedHeaders: ['Content-Type','Authorization'],
//     credentials: false // coloque true só se usar cookies/sessão
// }));

app.use(cors())

app.use(express.json())

//ROTAS
app.get('/', (req, res)=>res.send('Batcaverna is Online!'))

import professor from "./routes/professor.js"
app.use('/professor', professor)

import diario from "./routes/diario.js"
app.use('/diario', diario)

import usuario from "./routes/usuario.js"
app.use('/usuario', usuario)

app.listen(PORTA, ()=> console.log('Servidor rodando em http://localhost:'+PORTA))