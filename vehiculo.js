"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
//Declaro una nuva clase y la llamo Vehiculo
var Vehiculo = /** @class */ (function () {
    // Metodo para instanciar la clase
    function Vehiculo(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    // Metodos de acceso a las propiedades
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
