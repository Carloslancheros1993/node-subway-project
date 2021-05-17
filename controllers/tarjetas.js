const {Tarjeta, Recargas}= require("../models");

const obtenerTarjetas = async (req, res) => {
    try{
        const results = await Tarjeta.findAll({include: {model: Recargas}});
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

const agregarTarjeta = async (req, res) => {
    const datos = req.body;
    try{
    const results = await Tarjeta.create(datos);
    res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

module.exports = {obtenerTarjetas, agregarTarjeta}