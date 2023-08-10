import React, { useState, useEffect } from 'react'
import Battle from '../Battle/Battle';
import Signs from '../Signs/Signs'
import classes from './GameScreen.module.css'
import { useNavigate } from 'react-router-dom';

const GameScreen = () => {
    const [picked, setPicked] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(0);
    const navigate = useNavigate();

    // Load the score from Local Storage when the component mounts
    useEffect(() => {
        const localScore = +localStorage.getItem('score');
        if (localScore) {
            setScore(localScore);
            setShowScore(localScore);
        }
    }, []);

    // Save the score to Local Storage whenever the score changes
    useEffect(() => {
        localStorage.setItem('score', score.toString());
        setShowScore(score);
    }, [score]);


    return (
        <div className={classes.container}>
            <div className={classes['score']}>
                <img src="images/logo.svg" alt="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
                <div className={classes["score-board"]}>
                    <span>Score</span>
                    <span>{showScore}</span>
                </div>
            </div>
            {!picked ? <div className={classes['whole-img']}>
                <div style={{ position: "absolute" }}>
                    <div className={classes.rock} onClick={() => setPicked({ sign: 'rock', color: 'blue' })}><Signs color={'blue'} sign={'rock'} /></div>
                    <div className={classes.paper} onClick={() => setPicked({ sign: 'paper', color: 'red' })}><Signs color={'red'} sign={'paper'} /></div>
                    <div className={classes.scissors} onClick={() => setPicked({ color: 'yellow', sign: 'scissors' })}><Signs color={'yellow'} sign={'scissors'} /></div>
                </div >
                <div ><img className={classes['triangle-img']} src="images/bg-triangle.svg" alt="" /></div>
            </div > : <Battle picked={picked} setScore={setScore} />}
        </div >
    )
}

export default GameScreen;
