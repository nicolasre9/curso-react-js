import React from 'react'
import { useEffect, useState } from 'react'

export const ItemCount = ({max, min = 0}) => {

    const [counter, setCounter] = useState(min)

    const handleSumar = e => counter < max && setCounter(counter + 1);
    
    const handleRestar = e => counter > min && setCounter(counter - 1);


  return (
      //handleClick es la referencia, handleClick() devolveria el return
    <div> 
        <button onClick={handleRestar} className='btn btn-outline-primary'>-</button>
        <span className='mx-3'>{counter}</span>
        <button onClick={handleSumar} className='btn btn-primary'>+</button>
    </div>
  )
}
