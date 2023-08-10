import React, { useEffect, useState } from 'react'
import Signs from '../Signs/Signs';
import classes from './Battle.module.css'
import WinnerBox from '../WinnerBox/WinnerBox';

const Battle = ({ picked, setScore }) => {
    const [computerPicked, setComputerPicked] = useState(null);
    const [userWin, setUserWin] = useState(false);
    const [comWin, setComWin] = useState(false);
    const [winStatus, setWinStatus] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            if (random === 1) {
                setComputerPicked({ sign: 'rock', color: 'blue' });
            } else if (random === 2) {
                setComputerPicked({ sign: 'paper', color: 'red' });
            } else {
                setComputerPicked({ color: 'yellow', sign: 'scissors' });
            }
        }, 3000)
        return () => clearTimeout(timeout);
    }, [])

    useEffect(() => {

        if (picked && computerPicked) {
            console.log(picked, computerPicked);
            if (picked.sign === 'rock' && computerPicked.sign === 'scissors') {
                setScore((prev) => prev + 1);
                setUserWin(true);
                setComWin(false);
            }
            else if (picked.sign === 'paper' && computerPicked.sign === 'scissors') {
                setScore((prev) => prev - 1);
                setComWin(true);
                setUserWin(false);
            }
            else if (picked.sign === 'scissors' && computerPicked.sign === 'paper') {
                setScore((prev) => prev + 1);
                setUserWin(true);
                setComWin(false);
            }
            else if (picked.sign === 'rock' && computerPicked.sign === 'paper') {
                setScore((prev) => prev - 1);
                setComWin(true);
                setUserWin(false);
            }
            else if (picked.sign === 'paper' && computerPicked.sign === 'rock') {
                setScore((prev) => prev + 1);
                setUserWin(true);
                setComWin(false);
            }
            else if (picked.sign === 'scissors' && computerPicked.sign === 'rock') {
                setScore((prev) => prev - 1);
                setComWin(true);
                setUserWin(false);
            } else {
                setScore((prev) => prev);
            }
            setWinStatus(true);
        }

    }, [picked, computerPicked]);


    return (
        <>
            <div className={classes['battle-container']}>
                <div className={classes["battle-sign-container"]}><div className={classes['picked-title']}>You Picked</div>
                    <Signs color={picked.color} sign={picked.sign} winner={userWin} />
                </div>
                {winStatus ? <div className={classes['winner-box']}>
                    <WinnerBox winner={comWin == userWin ? 'Game Draw' : comWin ? 'Bot wins' : 'You win'} />
                </div> :
                    <></>}
                <div className={classes["battle-sign-container"]}><div className={classes['picked-title']}>Bot Picked</div>
                    {!computerPicked ? < span style={{ display: 'block', width: "9rem", height: "9rem", borderRadius: '50%', backgroundColor: 'gray' }} /> :
                        <Signs color={computerPicked.color} sign={computerPicked.sign} winner={comWin} />
                    }
                </div>
            </div>
            {winStatus ? <div className={classes['winner-box-mobile']}>
                <WinnerBox winner={comWin == userWin ? 'Game Draw' : comWin ? 'Bot wins' : 'You win'} />
            </div> :
                <></>}
        </>
    )
}

export default Battle;