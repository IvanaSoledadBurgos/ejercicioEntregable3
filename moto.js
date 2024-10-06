"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
//Importar la nueva clase creada que llame Vehiculo
var vehiculo_1 = require("./vehiculo");
//Declare clase llamada Moto que hereda de Vehiculo
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    // Metodo para instanciar la clase
    function Moto(marca, modelo, anio, cilindrada) {
        var _this = _super.call(this, marca, modelo, anio) || this; //Llamo al constructor de la clase padre
        _this.cilindrada = cilindrada;
        return _this;
    }
    // Metodos de acceso a las propiedades
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    return Moto;
}(vehiculo_1.Vehiculo));
exports.Moto = Moto;
