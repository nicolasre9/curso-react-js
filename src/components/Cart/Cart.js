import React from 'react'
import { useContext } from 'react'
import { MiContext } from '../../context/MiContext'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(MiContext)


    return (
        <div className="container my-4">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.precio * item.cantidad}</p>
                        {/* Hago esto para que sea la referencia a la fn */}
                        <button className="btn btn-danger" onClick={ () => eliminarItem(item.id) }> 
                            <BsFillTrashFill/>
                        </button>
                    </div>
                ))
            }

            <hr/>
            <h2>Total: ${totalCart()}</h2>

            <div className="my-2">
                <button className="btn btn-danger" onClick={vaciarCart}>Vaciar carro</button>
                <button className="btn btn-success mx-2" to="">Finalizar compra</button>
            </div>


        </div>
    )
}
