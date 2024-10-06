//Se importan las clases Auto , Moto y Camion
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';
import { Vehiculo } from './vehiculo';

//Se declara una nueva clase llamada RegistroAutomotor
class RegistroAutomotor {
    private vehiculos: Vehiculo[]; //Se declara una propiedad privada llamada vehiculos, que es un arreglo de objetos que pueden ser Auto, Moto o Camion

    constructor() {
        this.vehiculos = []; //inicializa la propiedad vehiculos como un arreglo vacío.
    }

    agregarVehiculo(vehiculo: Vehiculo) {
        this.vehiculos.push(vehiculo); //Agrega un nuevo vehículo al arreglo vehiculos.
    }

    getVehiculos(): Vehiculo[]{
        return this.vehiculos; //Retorna el arreglo completo de vehículos.
    }

    modificarVehiculo(marca: string, modelo: string, vehiculo: Vehiculo) {
        const indice = this.vehiculos.findIndex((v) => v.getMarca() === marca && v.getModelo() === modelo);
        if (indice !== -1) {
            this.vehiculos[indice] = vehiculo;
        }
    }

    //Busca un vehículo por marca y modelo y lo reemplaza con el nuevo objeto vehiculo.
    darDeBaja(marca: string, modelo: string) {
        this.vehiculos = this.vehiculos.filter((v) => !(v.getMarca() === marca && v.getModelo() === modelo));
    }

    //Elimina un vehículo del arreglo vehiculos según marca y modelo.
    getVehiculo(marca: string, modelo: string): Vehiculo | null {
        const vehiculo = this.vehiculos.find((v) => v.getMarca() === marca && v.getModelo() === modelo);
        return vehiculo || null;
    }

    //Busca un vehículo por marca y modelo y lo retorna. Si no se encuentra, retorna null.
    getVehiculosPorMarca(marca: string): Vehiculo[] {
        return this.vehiculos.filter((v) => v.getMarca() === marca); //Retorna un arreglo de vehículos que coincidan con la marca mencionada.
    }

    //Busca un vehiculo por modelo y retorna un arreglo de vehículos que coincidan con el modelo mencionado.
    getVehiculosPorModelo(modelo: string): Vehiculo[] {
        return this.vehiculos.filter((v) => v.getModelo() === modelo); 
    }
}

export { RegistroAutomotor }; //Se exporta la clase RegistroAutomotor para usarlo en otros archivos.

