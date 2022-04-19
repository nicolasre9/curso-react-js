import React, { useContext } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { useEffect, useState } from 'react'
import { MiContext } from '../../context/MiContext'
import { Link } from "react-router-dom"
import { Memo } from '../../Ejemplos/Memo/Memo'


export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {

  const [cantidad, setCantidad] = useState(0)

  const { cart, agregarAlCarrito, isInCart } = useContext(MiContext)

  console.log(cart)

  const handleAgregar = () => {
    if (cantidad === 0) return

    if (!isInCart(id)) { 
      const addItem = { id, nombre, precio, stock, cantidad }
      agregarAlCarrito(addItem)
    }
  }


  return (
    <div>
        <h3>{nombre}</h3>
        <img src={img} alt={nombre}/>
        <p>{desc}</p>
        <p>Stock: {stock}</p>
        <h5>Precio: ${precio}</h5>
        {/* <Memo/> */}

        
        {
          isInCart(id)
            ? <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>
            : <>
                <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>
                <button className="btn btn-success my-2" onClick={handleAgregar}>Agregar al carrito</button>
              </>
        }

        
    </div>
  )
}
