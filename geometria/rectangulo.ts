class Rectangulo {
    private _n1: number
    private _n2: number

    constructor(_n1:number, _n2:number){
        this._n1 = _n1
        this._n2 = _n2
    }

    getn1(){
        return this._n1
    }
    getn2(){
        return this._n2

    }
    getPerimetro(){
        return this._n1*2 + this._n2*2

    }
}
export{Rectangulo}
