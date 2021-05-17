const {Estaciones}= require("../models");

const agregarEstaciones = async (req, res) => {
    const datos = req.body;
    try{
        const results = await Estaciones.create(datos);
        res.json({message: results});
        }catch(error){
            console.log(error)
        }
    }
    
const obtenerEstaciones = async (req, res) => {
    try{
        const results = await Estaciones.findAll();
        res.json(results);
    }catch(error){
        console.log(error);
    }
}


module.exports = {obtenerEstaciones, agregarEstaciones}