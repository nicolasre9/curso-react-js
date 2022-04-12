import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {
  return (
    <div>
        <h3>{nombre}</h3>
        <img src={img} alt={nombre}/>
        <p>{desc}</p>
        <p>Stock: {stock}</p>
        <h5>Precio: ${precio}</h5>

        <ItemCount max={stock}/>
    </div>
  )
}
