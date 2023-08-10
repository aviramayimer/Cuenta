import { Cuenta } from "./Cuenta";
export class CuentaCorriente extends Cuenta{

    protected sobregiro:number = 0

    constructor( saldo:number, tasAnual:number){
        super(saldo, tasAnual)
        
    }
    //Metodos geter

    getSobregiro():number{
        return this.sobregiro
    }

    //Metodos seters

    setSobregiro(sobregiro:number){
        this.sobregiro = sobregiro
    }

    //Metodos de la clase

    public RetirarCorriente(cantidadRetirar:number){
        let contaRetiros:number = 0
        this.saldo = this.saldo - cantidadRetirar
        if(this.saldo < 0){
            this.sobregiro = this.saldo
        }
        contaRetiros += 1
        return contaRetiros
    }
    public ConsignarCorriente(cantidadConsignar:number){
        let contaConsig:number = 0
        if(this.sobregiro != 0){
            super.Consignar(cantidadConsignar)
        }
        else{
            this.sobregiro = this.sobregiro - cantidadConsignar
        }
        contaConsig += 1
        return contaConsig
    }
    public ExtractoMensualCorriente(){
        super.ExtractoMensual(this.comisionMensual)
    }
    public Imprimir(){
        return "Su saldo es: " + this.saldo+
                "\ncomision mensual: "+ this.comisionMensual+
                "\ntransacciones: "+ this.Consignar+ this.Retirar
    }
}