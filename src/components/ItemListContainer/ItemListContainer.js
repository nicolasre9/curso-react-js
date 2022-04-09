//import './ItemListContainer.scss'
import { useEffect, useState } from 'react';
import { Boton } from '../../Ejemplos/Boton/Boton';
import { Clicker } from '../../Ejemplos/Clicker';
import { Producto } from '../../Ejemplos/Producto';
import { pedirDatos } from '../../helpers/pedirDatos';
import { stock } from '../../data/stock';
import { Item } from '../Item/item';


export const ItemListContainer = ( {greeting} ) => {

    // const [clicker, setClicker] = useState(true);

    // const mostrar = () => {
    //     setClicker(!clicker)
    // }

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)


    // console.table(stock.map((el) => {
    //     return {
    //         nombre: el.nombre,
    //         precio: el.precio
    //     }
    // }))

    useEffect(() =>{
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(()=> setLoading(false))
    },[])
    


    return (
        <section className="item-list-container">
            {/* <h2>{greeting}</h2>
            <hr/> */}

            {
                loading 
                    ?   <h3>Loading...</h3>
                    :   <div className="row">
                            {/* { productos.map( (el, i) => <Item key={i} nombre={el.nombre} precio={el.precio} img={el.img} desc={el.desc} /> ) } */}
                            { productos.map( (el, i) => <Item key={i} {...el}/> ) }
                        </div>
            }
            
            {/* JSON.stringify(productos) */}
            {/* <Boton click={mostrar}>clicker</Boton> */}
            {/* { clicker === true ? <Clicker/> : null } */}
            {/* <Producto title={obj.titulo} content={obj.contenido}/> */}
        </section>
    )
}