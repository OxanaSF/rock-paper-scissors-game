import React from 'react';

// import Picks from "./Picks";
import WinnerAnnouncement from './WinnerAnnouncement';
import PlayAgainBtn from './PlayAgainBtn';
import classes from './GameResult.module.css';

const GameResult = (props) => {
  return (
    <section className={classes.game__result__container}>
      <h1> Game Result here</h1>
      <div>
        <h1>{props.userPick}</h1>
      </div>
      {/* <Picks /> */}
      <WinnerAnnouncement gameResult={props.gameResult} />
      <PlayAgainBtn />
    </section>
  );
};

export default GameResult;
