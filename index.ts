import { RegistroAutomotor } from './registroAutomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

const registro = new RegistroAutomotor();

registro.agregarVehiculo(new Auto('Toyota', 'Corolla', 2020, 4));
registro.agregarVehiculo(new Moto('Honda', 'CBR', 2020, 270));
registro.agregarVehiculo(new Camion('Scania', 'R450', 2010));

//Mostrar creación de vehículos
console.log('// Creación de vehículos');
console.log('Vehículos creados:');
console.log('  - Toyota Corolla 2020 4 puertas');
console.log('  - Honda CBR 2020 270cc');
console.log('  - Scania R450 2010');

//Mostrar vehiculos registrados
console.log('\n// Listado de vehículos registrados');
console.log(registro.getVehiculos());

//Modificar vehiculo
registro.modificarVehiculo('Toyota', 'Corolla', new Auto('Toyota', 'Corolla', 2022, 4));
console.log('\n// Modificación de vehículo');
console.log('Vehículo modificado: Toyota Corolla 2022 4 puertas');
console.log(registro.getVehiculo('Toyota', 'Corolla'));

//Dar de baja vehiculo
registro.darDeBaja('Honda', 'CBR');
console.log('\n// Eliminación de vehículo');
console.log('Vehículo eliminado: Honda CBR 2020 270cc');

//Mostrar vehiculos registrados despues de dar de baja
console.log('\n// Listado de vehículos registrados después de dar de baja');
console.log(registro.getVehiculos());

