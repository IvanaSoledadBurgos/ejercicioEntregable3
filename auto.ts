//Importar la nueva clase creada que llame Vehiculo
import { Vehiculo } from './vehiculo';

//Declaro una clase llamada Auto que hereda de Vehiculo
export class Auto extends Vehiculo { 
    private puertas: number;

    // Método para instanciar la clase
    constructor(marca: string, modelo: string, anio: number, puertas: number) {
        super(marca, modelo, anio); //Llamo al constructor de la clase padre
        this.puertas = puertas;
    }

    // Métodos de acceso a las propiedades
    getPuertas(): number {
        return this.puertas;
    }
}