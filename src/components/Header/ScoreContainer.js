import React from 'react';

import classes from './ScoreContainer.module.css';

const ScoreContainer = (props) => {
  return (
    <div className={classes.scores}>
      <div className={classes.score}>
        <div className={classes.score__title}>YOUR SCORE</div>
        <div className={classes.score__digit}>{props.userScore}</div>
      </div>

      <div className={classes.score}>
        <div className={classes.score__title}>HOUSE SCORE</div>
        <div className={classes.score__digit}>{props.houseScore}</div>
      </div>
    </div>
  );
};

export default ScoreContainer;
