import { stock } from "../data/stock"

// const obj = {
    //     titulo :  "titulo 1",
    //     contenido :  "contenido 1",
    //     precio : 2500
    // }


    // const promesa = new Promise( (resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("resuelto")
    //         reject("rechazado")
    //     },2000)        
    // })

    // const pedirDatos = (dato) => {
    //     return new Promise( (resolve, reject) => {
    //         if (dato){
    //             resolve("resuelto")
    //         } else {
    //             reject("rechazado")
    //         }     
    //     })
    // }

    export const pedirDatos = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 2000)     
        })
    }