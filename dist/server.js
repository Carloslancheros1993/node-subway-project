"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var express = require("express");

var morgan = require("morgan");

require("dotenv").config();

var tarjetaRouter = require("./routes/tarjetas");

var _require = require("../models"),
    Recargas = _require.Recargas,
    Tarjeta = _require.Tarjeta,
    Tarjetas = _require.Tarjetas;

var _require2 = require("../models"),
    Conductores = _require2.Conductores;

var PORT = process.env.PORT;
var app = express();
app.use(express.json());
app.use(morgan("dev"));
app.get('/', function (req, res) {
  res.send("Hola mundo");
});
app.use(tarjetaRouter);
app.post("/conductores", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var datos, results;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            datos = req.body;
            _context.prev = 1;
            _context.next = 4;
            return Conductores.create(datos);

          case 4:
            results = _context.sent;
            res.json({
              message: results
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post("/recarga", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var datos, tarjeta, saldoFinal, results, dynamic;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            datos = req.body;
            datos.fecha = new Date();
            _context2.prev = 2;
            _context2.next = 5;
            return Recargas.create(datos);

          case 5:
            _context2.next = 7;
            return Tarjeta.findOne({
              where: {
                id: datos.idTarjeta
              }
            });

          case 7:
            tarjeta = _context2.sent;
            ///Calculamos saldo final
            saldoFinal = Number(tarjeta.saldo) + Number(datos.valorRecarga); //Actualizamos el registro de la tarjeta

            _context2.next = 11;
            return Tarjeta.update({
              saldo: saldoFinal
            }, {
              where: {
                id: datos.idTarjeta
              }
            });

          case 11:
            results = _context2.sent;
            dynamic = Object.keys(datos);
            console.log(dynamic); //Enviamos el resultado

            res.json({
              message: "El saldo de la tarjeta ha sido abonado correctamente"
            });
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 17]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get("/recargas", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var results;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return Recargas.findAll({
              include: {
                model: Tarjeta
              }
            });

          case 3:
            results = _context3.sent;
            res.json(results);
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.get("/conductores", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var results;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return Conductores.findAll();

          case 3:
            results = _context4.sent;
            res.json(results);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app.get("/recargas/:id", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var results;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return Recargas.findOne({
              where: {
                id: req.params.id
              }
            });

          case 3:
            results = _context5.sent;
            res.json(results);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
app.get("/conductores/:id", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var results;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return Conductores.findOne({
              where: {
                id: req.params.id
              }
            });

          case 3:
            results = _context6.sent;
            res.json(results);
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
app.put('/recarga/:id', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var datos, results;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            //Actualizamos el registro de la tarjeta
            datos = req.body;
            console.log(datos);
            _context7.next = 5;
            return Recargas.update(datos, {
              where: {
                id: req.params.id
              }
            });

          case 5:
            results = _context7.sent;
            res.json({
              message: 'el registro de la recarga ha sido actualizado correctamente',
              results: results
            });
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 9]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
app.listen(PORT, function () {
  console.log("Corriendo servidor en el puerto", PORT);
});