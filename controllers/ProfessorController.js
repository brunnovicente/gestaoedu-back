import Professor from "../models/Professor.js";

class ProfessorController{

    index = async (req, res)=>{
        const professores = await Professor.findAll()
        res.json(professores)
    }

}

export default new ProfessorController()