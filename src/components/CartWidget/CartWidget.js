import React, { useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { MiContext } from '../../context/MiContext'

export const CartWidget = () => {

    const { cantidadCart, totalCart } = useContext(MiContext)
    
    return (
        <Link to="/cart" className="cart-widget">
            <BsFillCartFill/>
            <span>{cantidadCart()}</span>
            {/* <span>${totalCart()}</span> */}
        </Link>
    )
}
