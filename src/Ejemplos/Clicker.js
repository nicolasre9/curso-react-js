import { useState, useEffect } from "react"
import { Boton } from "./Boton/Boton"


export const Clicker = () => {

    let [clicks, setClicks] = useState(0);

    const aumentar = () => {
        setClicks( clicks + 1)
    }

    console.log("ejecutado siempre");

    useEffect(()=>{
        console.log("ejecutado solo en montaje");
        /* Peticiones a DB */

        //para desmontaje
        return () => {
            console.log("desmontado");
        }

    }, [])

    useEffect(()=>{
        console.log("ejecutado solo en montaje -clicks-");

        return () => {
            console.log("desmontado");
        }

    }, [clicks])

    return (
        <>
            <Boton click={aumentar}>Click!</Boton>
            <p>Clicks: {clicks}</p>
        </>
    )

} 