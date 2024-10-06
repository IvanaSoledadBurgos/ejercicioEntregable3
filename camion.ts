//Importar la nueva clase creada que llame Vehiculo
import { Vehiculo } from './vehiculo';

//Declare la clase llamada Camion que hereda de Vehiculo
export class Camion extends Vehiculo { 
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio); //Llama al constructor de la clase padre
    }
}

