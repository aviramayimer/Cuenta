
import { Cuenta } from "./Cuenta";
export class CuentaAhorros extends Cuenta{

    protected activa:boolean

    constructor(activa:boolean, saldo:number, tasAnual:number){
        super(saldo, tasAnual)
        this.activa = activa

        
    }
    //Metodo geter

    getActiva():boolean{
        return this.activa
    }

    //Metodo Seter

    setActiva(activa:boolean){
        this.activa = activa
    }

    //Metodos de la clase
    public EstadoCuenta(){
        if (this.saldo < 10000) {
            this.activa = true
         }
         else{
             this.activa==false
         }
         return this.activa
        }
    public RetirarAhorros(cantidadRetiro:number){
        let contRetiro: number = 0
            if (this.activa == true){
                console.log("Cuenta inactiva para retirar ");
            }
            else{
                super.Retirar(cantidadRetiro);
                contRetiro += 1
                return contRetiro
            }
    }
    
    public ConsignarAhorros(cantidadConsig:number){
        let contConsig:number = 0
       if(this.activa == true){
            console.log("--Cuenta inactiva--");
       }
       else{
        this.Consignar(cantidadConsig)
        contConsig += 1
        return contConsig
       }
    }
    //public ExtratoMensual():number{


    //}
    public Imprimir(){
        return "Su saldo actual es: "+ this.saldo+
                "\nSus transacciones fueron "+ this.Consignar + this.Retirar
    }
}
        
    


