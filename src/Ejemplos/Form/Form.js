import React from 'react'
import { useEffect, useState } from 'react'

export const Form = () => {
    /* FORMA INEFICIENTE PARA FORMULARIOS */
    // const [nombre, setNombre] = useState('')
    // const [email, setEmail] = useState('')

    // const handleNombre = (e) => setNombre(e.target.value)
    // const handleEmail = (e) => setEmail(e.target.value)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("submit: "+nombre+" "+email)
    // }

    // return (
    //     <div className="my-5 container">
    //         <form onSubmit={handleSubmit}>
    //             <input className="form-control" type="text" placeholder="Nombre" onChange={handleNombre} value={nombre}/>
    //             <input className="form-control" type="email" placeholder="Email" onChange={handleEmail} value={email}/>   
    //             <button type="submit" className="btn btn-primary">Enviar</button>
    //         </form>
    //     </div>
    // )

    /******************************/

    /* FORMA CORRECTA */
    const [values, setValues] = useState({
        nombre: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values, //replico estado anterior, luego reemplazo abajo
            [e.target.name]: e.target.value //al estar ultimo se modifica/reemplazo la propiedad que antes se puso en el spread de arriba
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <div className="my-5 container">
            <form onSubmit={handleSubmit}>
                {/* value de estados deben coincidir con el name del input */}
                <input className="form-control" type="text" placeholder="Nombre" onChange={handleInputChange} value={values.nombre} name="nombre"/>
                <input className="form-control" type="email" placeholder="Email" onChange={handleInputChange} value={values.email} name="email"/>   
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
