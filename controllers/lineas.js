const {Lineas}= require("../models");

const agregarLineas = async (req, res) => {
    const datos = req.body;
    try{
    const results = await Lineas.create(datos);
    res.json({message: results});
    }catch(error){
        console.log(error)
    }
}
    
const obtenerLineas = async (req, res) => {
    try{
        const results = await Lineas.findAll();
        res.json(results);
    }catch(error){
        console.log(error);
    }
}


module.exports = {obtenerLineas, agregarLineas}