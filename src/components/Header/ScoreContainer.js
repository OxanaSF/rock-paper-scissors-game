import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ScoreContainer.module.css';

const ScoreContainer = (props) => {
  const userScore = useSelector((state) => state.userScore.userScore);
  const houseScore = useSelector((state) => state.houseScore.houseScore);

  return (
    <div className={classes.scores}>
      <div className={classes.score}>
        <div className={classes.score__title}>YOUR SCORE</div>
        <div className={classes.score__digit}>{userScore}</div>
      </div>

      <div className={classes.score}>
        <div className={classes.score__title}>HOUSE SCORE</div>
        <div className={classes.score__digit}>{houseScore}</div>
      </div>
    </div>
  );
};

export default ScoreContainer;
