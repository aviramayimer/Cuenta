import { Cuenta } from "./Cuenta";
import { CuentaAhorros } from "./CuentaAhorros";
import { CuentaCorriente } from "./CuentaCorriente";

//let cuenta1 = new Cuenta(10000,0.22)
let cuentaAhorros1 = new CuentaAhorros(true,20000,0.23)
let cuentaCorriente1 = new CuentaCorriente(10000,30000)

console.log(cuentaAhorros1.EstadoCuenta(), "\n",cuentaAhorros1.ConsignarAhorros(2000),"\n",
        cuentaAhorros1.RetirarAhorros(3000),"\n",cuentaAhorros1.Imprimir(),
        "\n", cuentaAhorros1.ImprimirDatos());
console.log("\n", cuentaCorriente1.ConsignarCorriente(1000),"\n",cuentaCorriente1.RetirarCorriente(50000),"\n",cuentaCorriente1.ExtractoMensual(10),"\n",cuentaCorriente1.Imprimir());
console.log("estado de la cuenta es: ", cuentaAhorros1.EstadoCuenta());
