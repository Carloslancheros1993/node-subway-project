import express from "express";

const router = express.Router();

const {agregarConductores, obtenerConductores, obtenerConductoresPorId} = require("../../controllers/conductores");

router.get("/conductores", obtenerConductores);
router.get("/conductores/:id", obtenerConductoresPorId);
router.post("/conductores", agregarConductores);


module.exports = router;

