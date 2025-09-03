import Diario from '../models/Diario.js'
import Professor from '../models/Professor.js'
import Turma from '../models/Turma.js'
import Curso from '../models/Curso.js'
import Calendario from '../models/Calendario.js'

class DiarioController {

    listar = async function (req, res){
        const siape = req.params.siape;
        const professor = await Professor.findOne({
            where:{
                siape: siape
            }
        });
        if(!professor){
            return res.status(404).json({message: 'Professor não encontrado'});
        }
        const diarios = await Diario.findAll({
            where:{professor_id:professor.id},
            include:{
                model: Turma,
                include: [
                    {
                        model: Curso,
                    },
                    {
                        model: Calendario
                    }
                ]
            }
        })

        res.json({diarios, professor})
    }

}

export default new DiarioController();