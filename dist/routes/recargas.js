"use strict";

var express = require("express");

var router = express.Router();
router.get("/recargas");
router.get("/recargas/:id");
router.post("/recarga");
router.put("/recarga/:id");