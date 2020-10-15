class Triangulo {
    private _a1: number
    private _a2: number

    constructor(_a1:number, _a2:number){
        this._a1 = _a1
        this._a2 = _a2
    }

    geta1(){
        return this._a1
    }
    geta2(){
        return this._a2

    }
    getArea(){
        return this._a1 * this._a2 / 2

    }
}
export{Triangulo}
