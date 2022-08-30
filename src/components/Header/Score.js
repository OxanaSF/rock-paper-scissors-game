import React from 'react';

import classes from './Score.module.css';

const Score = () => {
  return (
    <div className={classes.score}>
      <div className={classes.score__title}>SCORE</div>
      <div className={classes.score__digit}>12</div>
    </div>
  );
};

export default Score;
