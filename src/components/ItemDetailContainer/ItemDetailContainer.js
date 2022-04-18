import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
// import { db } from '../../firebase/config';
// import { collection, getDocs } from 'firebase/firestore';


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                setItem(res.find( el => el.id === Number(itemId) ))
            })
          .finally(() => setLoading(false))

        // const productosReferencia = collection(db, 'productos');
        // getDocs(productosReferencia)
        //     .then((resp) => resp.docs.map((doc) => console.log(doc.data())))

    }, [itemId])

  return (
    <div className='container my-5'>
        {
            loading 
            ? <h2>Cargando...</h2>
            : <ItemDetail {...item}/>
        }
    </div>
  )
}
