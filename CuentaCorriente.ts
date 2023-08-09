export class CuentaCorriente{

    protected sobregiro:boolean

    constructor(sobregiro:boolean){
        this.sobregiro = sobregiro
    }

    getSobregiro():boolean{
        return this.sobregiro
    }
    setSobregiro(sobregiro:boolean){
        this.sobregiro = sobregiro
    }
}