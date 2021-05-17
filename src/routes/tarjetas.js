import express from "express";

const {agregarTarjeta, obtenerTarjetas} = require("../../controllers/tarjetas");

const router = express.Router();

router.get("/tarjetas", obtenerTarjetas);
router.post("/tarjetas", agregarTarjeta);

module.exports = router;