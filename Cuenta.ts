export class Cuenta{
    protected saldo:number
    protected numeroConsignaciones:number=0
    protected numeroRetiros:number = 0
    protected tasaAnual:number
    protected comisionMensual:number=0

    constructor(saldo:number,  tasAnual:number){
        this.saldo = saldo
        this.tasaAnual = tasAnual

    }
    //Metodos geters 

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

    //Metodos seters 

    setSaldo(saldo:number){
        this.saldo=saldo
    }
    setNumeroConsignaciones(numconsig:number){
        this.numeroConsignaciones = numconsig
    }
    setNumeroRetiros(numret:number){
        this.numeroRetiros = numret
    }
    setTasaAnual(tasAnual:number){
        this.tasaAnual = tasAnual
    }
    setComisionMensual(comisionMen:number){
        this.comisionMensual = comisionMen
    }

    //Metodos de la clase

    public Consignar(cantidadConsignar:number){
        this.saldo += cantidadConsignar
    }
    public Retirar(cantidadRetiro:number){
        if (this.saldo<=cantidadRetiro) {
            this.saldo = this.saldo - cantidadRetiro
            return console.log("Su saldo es: ", this.saldo);
        }
        else{
            return console.log("*El monto a retirar supera el saldo acutual*");
        }
    }
    public CalcularInteres(interesMensual:number){
        this.saldo = this.saldo - (this.saldo * interesMensual)
        return this.saldo*interesMensual
    }
    public ExtractoMensual(comisionMensual:number){
        this.saldo = this.saldo - comisionMensual
        this.CalcularInteres(this.saldo)
    }
    public ImprimirDatos(){
        return "saldo actual: "+ this.saldo+
        "\nNumero de consignaciones realizadas: "+
        "\Numero de Retiros: "+ this.numeroRetiros+
        "\nTasa Anual es: "+ this.tasaAnual+
        "\nLa comision mensual es: "+ this.comisionMensual
        
    }
}