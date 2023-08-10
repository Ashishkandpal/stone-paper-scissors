import React from 'react'
import classes from './Signs.module.css'

const Signs = ({ sign, color, winner }) => {
    let val;
    if (color === 'red') {
        val = '0 0 20px rgba(255, 0, 0, 0.7)';
    } else if (color === 'blue') {
        val = '0 0 20px rgba(0, 0, 255, 0.7)';
    } else {
        val = '0 0 20px rgba(255, 255, 0, 0.7)';
    }
    return (
        <div className={classes["sign-container"]} style={{ border: `1rem solid ${color}`, boxShadow: `${val}` }}>
            <img className={classes["sign-logo"]} src={`images/icon-${sign}.svg`} alt="bg" />
            {winner && <span className={classes["circles-one"]}></span>}
            {winner && <span className={classes["circles-two"]}></span>}
            {winner && <span className={classes["circles-three"]}></span>}

        </div>

    )
}

export default Signs;