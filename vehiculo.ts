//Declaro una nuva clase y la llamo Vehiculo
export class Vehiculo { 
    private marca: string;
    private modelo: string;
    private anio: number;

    // Metodo para instanciar la clase
    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    // Metodos de acceso a las propiedades
    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.modelo;
    }
    getAnio(): number {
        return this.anio;
    }
}