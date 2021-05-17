import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const tarjetaRouter = require("./routes/tarjetas");
const recargasRouter = require("./routes/recargas");
const conductoresRouter = require("./routes/conductores");
const estacionesRouter = require("./routes/estaciones");
const lineasRouter = require("./routes/lineas");
const metrosRouter = require("./routes/metros");
const mantenimientoRouter = require("./routes/mantenimientos");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(morgan("dev"));

const {Estaciones, Lineas, Lineas_Estaciones, Metros, Metros_Conductores, Conductores} = require("../models");

app.use(tarjetaRouter, recargasRouter, conductoresRouter, estacionesRouter, lineasRouter, metrosRouter, mantenimientoRouter);

app.post("/lineas_estaciones", async (req, res) => {
    const datos = req.body;
    try{
    const results = await Lineas_Estaciones.create(datos);
    res.json({message: results});
    }catch(error){
        console.log(error)
    }
});

app.post("/metros_conductores", async (req, res) => {
    const datos = req.body;
    try{
    const results = await Metros_Conductores.create(datos);
    res.json({message: results});
    }catch(error){
        console.log(error)
    }
});

app.get("/lineas_estaciones", async (req, res) => {
    try{
        const results = await Lineas_Estaciones.findAll({include: [Lineas, Estaciones]});
        res.json(results);
    }catch(error){
        console.log(error);
    }
});

app.get("/metros_conductores", async (req, res) => {
    try{
        const results = await Metros_Conductores.findAll({include: [Metros, Conductores]});
        res.json(results);
    }catch(error){
        console.log(error);
    }
});


app.listen(PORT, () => {
    console.log("Corriendo servidor en el puerto", PORT);
});

