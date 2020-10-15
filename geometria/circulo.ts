class Circulo {
    private _r1: number

    constructor(_r1:number){
        this._r1 = _r1

    }

    getr1(){
        return this._r1
    }

    getPerimetro(){
        return 2 * Math.PI * this._r1 

    }
}
export{Circulo}
