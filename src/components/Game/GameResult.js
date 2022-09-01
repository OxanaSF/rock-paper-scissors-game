import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Picks from './Picks';
import WinnerAnnouncement from './WinnerAnnouncement';
import PlayAgainBtn from './PlayAgainBtn';
import classes from './GameResult.module.css';

const GameResult = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('props.GAME___RESULTS', props.gameResult);
  });

  useEffect(() => {
    if (!props.userPick || !props.housePick) {
      navigate('/');
    }

    const pickedByUserNumber = props.userPick.slice(-1) * 1;

    if (pickedByUserNumber === props.housePick) {
      props.setGameResult('DRAW');
    } else if (
      (props.userPick === 'img1' && props.housePick === 3) ||
      (props.userPick === 'img2' && props.housePick === 1) ||
      (props.userPick === 'img3' && props.housePick === 2)
    ) {
      props.setGameResult('YOU WIN');
    } else if (
      (props.userPick === 'img1' && props.housePick === 2) ||
      (props.userPick === 'img2' && props.housePick === 3) ||
      (props.userPick === 'img3' && props.housePick === 1)
    ) {
      props.setGameResult('YOU LOSE');
    }

    console.log('pickedByUser: ', props.userPick);
    console.log('props.userPick', props.userPick);
    console.log('random: ', props.housePick);
    console.log('props.housePick', props.housePick);
    console.log('props.GAME___RESULTS', props.gameResult);
  }, [props.userPick, props.housePick]);

  return (
    <section className={classes.game__result__container}>
      <Picks userPick={props.userPick} housePick={props.housePick} />

      <WinnerAnnouncement gameResult={props.gameResult} />

      <PlayAgainBtn />
    </section>
  );
};

export default GameResult;
