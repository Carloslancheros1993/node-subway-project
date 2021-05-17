import express from "express";

const router = express.Router();

const {agregarEstaciones, obtenerEstaciones} = require("../../controllers/estaciones");

router.get("/estaciones", obtenerEstaciones);
router.post("/estaciones", agregarEstaciones);


module.exports = router;