import express from "express";

const router = express.Router();

const {agregarMetros, obtenerMetros} = require("../../controllers/metros");

router.get("/metros", obtenerMetros);
router.post("/metros", agregarMetros);


module.exports = router;