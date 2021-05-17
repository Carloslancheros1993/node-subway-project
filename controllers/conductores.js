const {Conductores}= require("../models");

const agregarConductores = async (req, res) => {
    const datos = req.body;
    try{
        const results = await Conductores.create(datos);
        res.json({message: results});
        }catch(error){
            console.log(error)
        }
    }
    
const obtenerConductores = async (req, res) => {
    try{
        const results = await Conductores.findAll();
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

const obtenerConductoresPorId = async (req, res) => {
    try{
        const results = await Conductores.findOne({where: {id: req.params.id}});
        res.json(results);
    }catch(error){
        console.log(error);
    }
}


module.exports = {obtenerConductores, agregarConductores,obtenerConductoresPorId}