//import './ItemListContainer.scss'
import { useContext, useEffect, useState } from 'react';
import { Boton } from '../../Ejemplos/Boton/Boton';
import { Clicker } from '../../Ejemplos/Clicker';
import { Producto } from '../../Ejemplos/Producto';
import { pedirDatos } from '../../helpers/pedirDatos';
import { stock } from '../../data/stock';
import { Item } from '../Item/item';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';


export const ItemListContainer = ( {greeting} ) => {

    // const [clicker, setClicker] = useState(true);

    // const mostrar = () => {
    //     setClicker(!clicker)
    // }

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    console.log(productos)

    //const params = useParams()
    const { catId } = useParams()


    // console.table(stock.map((el) => {
    //     return {
    //         nombre: el.nombre,
    //         precio: el.precio
    //     }
    // }))

    useEffect(() => {
        setLoading(true)
         
        // pedirDatos()
        //     .then((res) => {
        //         if (catId){
        //             setProductos(res.filter( (el) => el.categoria === catId) );
        //         } else {
        //             setProductos(res)
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        //     .finally(()=> setLoading(false))

        const productosReferencia = collection(db, 'productos');
        getDocs(productosReferencia)
            .then((resp) => setProductos(resp.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })))
            .finally(()=> setLoading(false))

    }, [catId])
    


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