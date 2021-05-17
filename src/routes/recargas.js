import express from "express";

const router = express.Router();

const {agregarRecargas, obtenerRecargas, obtenerRecargasPorId, actualizarRecargasPorId} = require("../../controllers/recargas");

router.get("/recargas", obtenerRecargas);
router.post("/recargas", agregarRecargas);
router.get("/recargas/:id", obtenerRecargasPorId);
router.put("/recarga/:id", actualizarRecargasPorId);

module.exports = router;



