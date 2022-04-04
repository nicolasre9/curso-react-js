import { useState } from "react"
import { Boton } from "./Boton/Boton"


export const Clicker = () => {

    let [clicks, setClicks] = useState(0);

    const aumentar = () => {
        setClicks( clicks + 1)
    }

    return (
        <>
        <Boton click={aumentar}>Click!</Boton>
        <p>Clicks: {clicks}</p>
        </>
    )

}