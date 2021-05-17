const {Tarjeta, Recargas}= require("../models");

const obtenerRecargas = async (req, res) => {
    try{
        const results = await Recargas.findAll({include: {model: Tarjeta}});
        res.json(results);
    }catch(error){
        console.log(error);
    }
}

const agregarRecargas = async (req, res) => {
    const datos = req.body;
    try{
    const results = await Recargas.create(datos);
    res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

const obtenerRecargasPorId = async (req, res) => {
    try{
        const results = await Recargas.findOne({where: {id: req.params.id}});
        res.json(results);
    }catch(error){
        console.log(error);
    }
}


const actualizarRecargasPorId = async (req, res) => {
    try{
        //Actualizamos el registro de la tarjeta
        const datos = req.body;
        console.log(datos);
        const results = await Recargas.update(datos, {where: {id: req.params.id}});

        res.json({message: 'el registro de la recarga ha sido actualizado correctamente', results});
    }catch(error){
        console.log(error);
    }
}

module.exports = {obtenerRecargas, agregarRecargas, obtenerRecargasPorId, actualizarRecargasPorId}