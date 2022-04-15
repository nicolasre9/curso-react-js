import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {

    return (
        <header className="header">
            <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
                <h1>Logo</h1>
            </Link>

            <nav className="header-nav">
                <Link to="/productos/remeras" className="header-link">Remeras</Link>
                <Link to="/productos/zapatos" className="header-link">Zapatos</Link>
                <Link to="/productos/gorros" className="header-link">Gorros</Link>
                {/* <Link to="/nosotros" className="header-link">Nosotros</Link>
                <Link to="/contacto" className="header-link">Contacto</Link> */}
                <Link to="/poke-api" className="header-link">PokeAPI</Link>
                <Link to="/form" className="header-link">Form</Link>
                <Link to="/cart" className="header-link">Carro</Link>
                <CartWidget/>
            </nav>
        </header>
    )
}