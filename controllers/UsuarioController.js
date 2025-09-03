import Usuario from "../models/Usuario.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class UsuarioController {

    login = async (req, res) => {
        try{
            const username = req.body.username;
            const password = req.body.password;

            const usuario = await Usuario.findOne({
                where:{
                    username: username,
                }
            })

            //Caso o usuário não exista
            if(!usuario){
                return res.status(404).send({message: 'Usuário não encontrado'})
            }

            const isSenha = await bcrypt.compare(password, usuario.password)

            //Caso senha incorreta
            if(!isSenha){
                return res.status(404).send({message: 'Senha incorreta'})
            }
            const JWT_SECRET = process.env.JWT_SECRET;

            //Gerar o token jwt
            const token = await jwt.sign({id: usuario.id, username: usuario.username, email: usuario.email}, JWT_SECRET, {expiresIn: '1h'})

            res.status(200).json(token);
        }catch(err){
            res.status(500).json({message:"Erro: "+err});
        }
    }//Fim do Login

}

export default new UsuarioController();