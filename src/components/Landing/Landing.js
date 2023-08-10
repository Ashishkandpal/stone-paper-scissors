import React from 'react'
import { useNavigate } from 'react-router-dom'
import Signs from '../Signs/Signs'
import classes from './Landing.module.css'

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div><h1 className={classes['landing-title']}>Stone Paper Scissors</h1></div>
      <div className={classes['whole-img']}>
        <div style={{ position: "absolute" }}>
          <div className={classes.rock}><Signs color={'blue'} sign={'rock'} /></div>
          <div className={classes.paper}><Signs color={'red'} sign={'paper'} /></div>
          <div className={classes.scissors}><Signs color={'yellow'} sign={'scissors'} /></div>
        </div >
        <div><img className={classes['triangle-img']} src="images/bg-triangle.svg" alt="" /></div>
      </div >
      <div className={classes.btn} onClick={() => navigate('/game-screen')}>Start</div>
    </div >
  )
}

export default Landing