export class Cuenta{
    protected saldo:number
    protected numeroConsignaciones:number=0
    protected numeroRetiros:number = 0
    protected tasaAnual:number
    protected comisionMensual:number=0

    constructor(saldo:number,numconsig:number, numret:number, comisionMen:number){
        this.saldo = saldo
        this.numeroRetiros = numconsig
        this.numeroRetiros = numret
        this.comisionMensual = comisionMen
    }

    getSaldo():number{
        return this.saldo
    }
    getNumeroConsignaciones():number{
        return this.numeroConsignaciones
    }
    getNumeroRetiros():number{
       return this.numeroRetiros
    }
    getTasaAnual():number{
        return this.tasaAnual
    }
    getComisionMensual():number{
        return this.comisionMensual
    }

    setSaldo(saldo:number){
        this.saldo=saldo
    }
    setNumeroConsignaciones(numconsig:number){
        this.numeroConsignaciones = numconsig
    }
    setNumeroRetiros(numret:number){
        this.numeroRetiros = numret
    }
    setComisionMensual(comisionMen:number){
        this.comisionMensual = comisionMen
    }
}