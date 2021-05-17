const {Mantenimiento, Metros}= require("../models");

const agregarMantenimiento = async (req, res) => {
    const datos = req.body;
    try{
    const results = await Mantenimiento.create(datos);
    res.json({message: results});
    }catch(error){
        console.log(error)
    }
}
    
const obtenerMantenimiento = async (req, res) => {
    try{
        const results = await Mantenimiento.findAll({include: [Metros]});
        res.json(results);
    }catch(error){
        console.log(error);
    }
}


module.exports = {agregarMantenimiento, obtenerMantenimiento}