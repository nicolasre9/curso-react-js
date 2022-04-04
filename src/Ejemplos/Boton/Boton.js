import { Button } from "react-bootstrap"


export const Boton = ( {children, click} ) => {

    return (
        <>
            <button className="btn btn-primary" onClick={click}>{children}</button>
        </>
    )

}