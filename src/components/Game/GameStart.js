import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './GameStart.module.css';

const Game = () => {
  const [userPick, setUserPick] = useState('')

  return (
    <main className={classes.game__container}>

      <Link to='/game-result' >
      <div className={classes.game__paper__border}>
        <div className={classes.game__paper}>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-paper.svg`}
            alt="paper"
          />
        </div>
      </div>
      </Link>

      <Link to='/game-result' >
      <div className={classes.game__scissors__border}>
        <div className={classes.game__scissors}>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-scissors.svg`}
            alt="scissors"
          />
        </div>
      </div>
      </Link>

      <Link to='/game-result' >
      <div className={classes.game__rock__border}>
        <div className={classes.game__rock}>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-rock.svg`}
            alt="rock"
          />
        </div>
      </div>
      </Link>


    </main>
  );
};

export default Game;
