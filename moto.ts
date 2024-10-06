//Importar la nueva clase creada que llame Vehiculo
import { Vehiculo } from './vehiculo';

//Declare clase llamada Moto que hereda de Vehiculo
export class Moto extends Vehiculo { 
    private cilindrada: number;

    // Metodo para instanciar la clase
    constructor(marca: string, modelo: string, anio: number, cilindrada: number) {
        super(marca, modelo, anio); //Llamo al constructor de la clase padre
        this.cilindrada = cilindrada;
    }

    // Metodos de acceso a las propiedades
    getCilindrada(): number {
        return this.cilindrada;
    }
}