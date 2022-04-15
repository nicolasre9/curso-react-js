import { createContext, useState } from "react"

//creo contexto
export const MiContext = createContext()


//creo provider para el contexto
export const MiProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const agregarAlCarrito = item => setCart([...cart, item])
    const isInCart = id => cart.some((prod) => prod.id === id) //find() retorna elemento, some() retorna true/false
    const cantidadCart = () => cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    const totalCart = () => cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    const vaciarCart = () => setCart([])
    const eliminarItem = (id) => setCart( cart.filter((prod) => prod.id !== id) )

    
    return (
        <MiContext.Provider value={ 
            {   cart,
                agregarAlCarrito,
                isInCart,
                cantidadCart,
                totalCart,
                vaciarCart,
                eliminarItem
            }}>

            {children}
        </MiContext.Provider>
    )    
}