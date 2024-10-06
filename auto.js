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
exports.Auto = void 0;
//Importar la nueva clase creada que llame Vehiculo
var vehiculo_1 = require("./vehiculo");
//Declaro una clase llamada Auto que hereda de Vehiculo
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    // Método para instanciar la clase
    function Auto(marca, modelo, anio, puertas) {
        var _this = _super.call(this, marca, modelo, anio) || this; //Llamo al constructor de la clase padre
        _this.puertas = puertas;
        return _this;
    }
    // Métodos de acceso a las propiedades
    Auto.prototype.getPuertas = function () {
        return this.puertas;
    };
    return Auto;
}(vehiculo_1.Vehiculo));
exports.Auto = Auto;
