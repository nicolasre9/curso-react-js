import React from 'react'

export const Memo = React.memo(() => {

    console.log("Montaje del Memo")

    return (
        <div>
            <p>MEMO</p>
        </div>
    )
})
