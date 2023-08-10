import React from 'react'
import classes from './Circles.module.css'

const Circles = () => {
    return (
        <div className={classes['circles-container']}>
            <div className={classes['most-outer']}>
            </div>
            <div className={classes['outer']}>
            </div>
            <div className={classes['inner']}></div>
            <div className={classes['most-inner']}></div>
        </div>

    )
}

export default Circles;