import express from "express";

const router = express.Router();

const {agregarMantenimiento, obtenerMantenimiento} = require("../../controllers/mantenimientos");

router.get("/mantenimiento", obtenerMantenimiento);
router.post("/mantenimiento", agregarMantenimiento);


module.exports = router;