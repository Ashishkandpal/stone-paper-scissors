import React from 'react'


const WinnerBox = ({ winner }) => {

    return (
        <>
            <h1>{winner}</h1>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    )
}

export default WinnerBox