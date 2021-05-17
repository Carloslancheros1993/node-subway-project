const {Metros}= require("../models");

const agregarMetros = async (req, res) => {
    const datos = req.body;
    try{
    const results = await Metros.create(datos);
    res.json({message: results});
    }catch(error){
        console.log(error)
    }
}
    
const obtenerMetros = async (req, res) => {
    try{
        const results = await Metros.findAll();
        res.json(results);
    }catch(error){
        console.log(error);
    }
}


module.exports = {obtenerMetros, agregarMetros}