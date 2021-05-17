import express from "express";

const router = express.Router();

const {agregarLineas, obtenerLineas} = require("../../controllers/lineas");

router.get("/lineas", obtenerLineas);
router.post("/lineas", agregarLineas);


module.exports = router;