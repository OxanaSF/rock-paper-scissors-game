import React from 'react';

import classes from './Game.module.css';

const Game = () => {
  return (
    <section className={classes.game__container}>
      <div className={classes.game__paper__border}>
        <div className={classes.game__paper}>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-paper.svg`}
            alt="paper"
          />
        </div>
      </div>
      <div className={classes.game__scissors__border}>
        <div className={classes.game__scissors}>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-scissors.svg`}
            alt="scissors"
          />
        </div>
      </div>
      <div className={classes.game__rock__border}>
        <div className={classes.game__rock}>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-rock.svg`}
            alt="rock"
          />
        </div>
      </div>
    </section>
  );
};

export default Game;
