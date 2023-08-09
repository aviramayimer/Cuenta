export class CuentaAhorros{

    protected activa:boolean

    constructor(activa:boolean){
        this.activa = activa
    }

    getActiva():boolean{
        return this.activa
    }

    setActiva(activa:boolean){
        this.activa = activa
    }

}