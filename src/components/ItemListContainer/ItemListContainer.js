//import './ItemListContainer.scss'
import { useEffect, useState } from 'react';
import { Boton } from '../../Ejemplos/Boton/Boton';
import { Clicker } from '../../Ejemplos/Clicker';
import { Producto } from '../../Ejemplos/Producto';
import { pedirDatos } from '../../helpers/pedirDatos';
import { stock } from '../../data/stock';


export const ItemListContainer = ( {greeting} ) => {

    // const [clicker, setClicker] = useState(true);

    // const mostrar = () => {
    //     setClicker(!clicker)
    // }

    const [productos, setProductos] = useState([])

    useEffect(() =>{
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])
    


    return (
        <section className="item-list-container">
            <h2>{greeting}</h2>
            <hr/>
            {/* <Boton click={mostrar}>clicker</Boton> */}
            {JSON.stringify(productos)}
            <hr/>

            {/* { clicker === true ? <Clicker/> : null } */}
            
            {/* <Producto title={obj.titulo} content={obj.contenido}/> */}
        </section>
    )
}