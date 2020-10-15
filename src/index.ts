import {menuPral} from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
import {Rectangulo} from '../geometria/rectangulo'
import {Triangulo} from '../geometria/triangulo'
import {Circulo} from '../geometria/circulo'
const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Perimetro rectangulo")
                let n1: number
                let n2: number
                n1 =  parseInt( await leerTeclado('Dame un lado')) 
                n2 =  parseInt( await leerTeclado('Dame otro lado'))
                let rectangulo = new Rectangulo(n1, n2)
                console.log("el perimetro es " + rectangulo.getPerimetro())
                break
            case 2:
                console.log("Area triangulo")
                let a1: number
                let a2: number
                a1 =  parseInt( await leerTeclado('Dame altura')) 
                a2 =  parseInt( await leerTeclado('Dame base')) 
                let triangulo = new Triangulo(a1, a2)
                console.log("el perimetro es " + triangulo.getArea())
                break

                case 3:
                    console.log("Perimetro circulo")
                    let r1: number
                    r1 =  parseInt( await leerTeclado('Dame un lado')) 
                    let circulo = new Circulo(r1)
                    console.log("el perimetro es " + circulo.getPerimetro())
                    break
    

            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}


main()