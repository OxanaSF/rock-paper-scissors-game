import React from 'react';
import { useSelector } from 'react-redux';

import classes from './WinnerAnnouncement.module.css';

const WinnerAnnouncement = () => {
  const gameResult = useSelector((state) => state.gameResult.gameResult);

  return (
    <div className={classes.winner__announcement__container}>
      <h1>{gameResult}</h1>
    </div>
  );
};

export default WinnerAnnouncement;
