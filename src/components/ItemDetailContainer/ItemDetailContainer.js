import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        // pedirDatos()
        //     .then((res) => {
        //         setItem(res.find( el => el.id === Number(itemId) ))
        //     })
        //   .finally(() => setLoading(false))

        const docReferencia = doc(db, 'productos', itemId);
        getDoc(docReferencia)
            .then((doc) => {
              setItem({id: doc.id, ...doc.data()})
            })
            .finally(()=> setLoading(false))


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
