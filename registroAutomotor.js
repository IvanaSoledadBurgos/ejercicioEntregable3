"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
//Se declara una nueva clase llamada RegistroAutomotor
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = []; //inicializa la propiedad vehiculos como un arreglo vacío.
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo); //Agrega un nuevo vehículo al arreglo vehiculos.
    };
    RegistroAutomotor.prototype.getVehiculos = function () {
        return this.vehiculos; //Retorna el arreglo completo de vehículos.
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (marca, modelo, vehiculo) {
        var indice = this.vehiculos.findIndex(function (v) { return v.getMarca() === marca && v.getModelo() === modelo; });
        if (indice !== -1) {
            this.vehiculos[indice] = vehiculo;
        }
    };
    //Busca un vehículo por marca y modelo y lo reemplaza con el nuevo objeto vehiculo.
    RegistroAutomotor.prototype.darDeBaja = function (marca, modelo) {
        this.vehiculos = this.vehiculos.filter(function (v) { return !(v.getMarca() === marca && v.getModelo() === modelo); });
    };
    //Elimina un vehículo del arreglo vehiculos según marca y modelo.
    RegistroAutomotor.prototype.getVehiculo = function (marca, modelo) {
        var vehiculo = this.vehiculos.find(function (v) { return v.getMarca() === marca && v.getModelo() === modelo; });
        return vehiculo || null;
    };
    //Busca un vehículo por marca y modelo y lo retorna. Si no se encuentra, retorna null.
    RegistroAutomotor.prototype.getVehiculosPorMarca = function (marca) {
        return this.vehiculos.filter(function (v) { return v.getMarca() === marca; }); //Retorna un arreglo de vehículos que coincidan con la marca mencionada.
    };
    //Busca un vehiculo por modelo y retorna un arreglo de vehículos que coincidan con el modelo mencionado.
    RegistroAutomotor.prototype.getVehiculosPorModelo = function (modelo) {
        return this.vehiculos.filter(function (v) { return v.getModelo() === modelo; });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
