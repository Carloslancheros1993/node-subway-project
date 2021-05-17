"use strict";

var express = require("express");

var _require = require("../controllers/tarjetas"),
    agregarTarjeta = _require.agregarTarjeta,
    obtenerTarjetas = _require.obtenerTarjetas;

var router = express.Router();
router.get("/tarjetas", obtenerTarjetas);
router.post("/tarjetas", agregarTarjeta);
module.exports = router;