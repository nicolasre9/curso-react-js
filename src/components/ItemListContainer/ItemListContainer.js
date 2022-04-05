//import './ItemListContainer.scss'
import { Clicker } from '../../Ejemplos/Clicker';
import { Producto } from '../../Ejemplos/Producto';

export const ItemListContainer = ( {greeting} ) => {

    

    const obj = {
        titulo :  "titulo 1",
        contenido :  "contenido 1",
        precio : 2500
    }
    
    return (
        <section className="item-list-container">
            <h2>{greeting}</h2>

            <Clicker/>
            <hr/>
            <Producto title={obj.titulo} content={obj.contenido}/>
        </section>
    )
}