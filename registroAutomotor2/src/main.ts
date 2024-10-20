import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";

const registro = new RegistroAutomotor();

const auto1 = new Auto("Toyota", "Corolla", 2020);
const moto1 = new Moto("Honda", "CB500", 2019, 471);
const camion1 = new Camion("Mercedes", "Actros", 2021, 250);
const moto2 = new Moto("Yamaha", "R6", 2008, 599);

registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
registro.agregarVehiculo(moto2);

const autoModificado = new Auto("Toyota", "Corolla", 2021);
registro.modificarVehiculo(0, autoModificado);

registro.darDeBajaVehiculo(1);

console.log(registro.getVehiculos());
