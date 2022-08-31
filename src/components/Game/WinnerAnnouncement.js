import React from 'react';

import classes from './WinnerAnnouncement.module.css';

const WinnerAnnouncement = (props) => {
  return (
    <div className={classes.winner__announcement__container}>
      <h1>{props.gameResult}</h1>
    </div>
  );
};

export default WinnerAnnouncement;
