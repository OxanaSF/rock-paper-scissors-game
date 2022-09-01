import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Picks from './Picks';
import WinnerAnnouncement from './WinnerAnnouncement';
import PlayAgainBtn from './PlayAgainBtn';
import classes from './GameResult.module.css';

const GameResult = (props) => {
  const navigate = useNavigate();

  const {
    setUserScore,
    userPick,
    housePick,
    gameResult,
    setGameResult,
    setHouseScore,
  } = props;

  useEffect(() => {
    if (!userPick || !housePick) {
      navigate('/');
    }

    if (
      (userPick === 'img1' && housePick === 'img3') ||
      (userPick === 'img2' && housePick === 'img1') ||
      (userPick === 'img3' && housePick === 'img2')
    ) {
      setGameResult('YOU WIN');
      setUserScore((prevScore) => prevScore + 1);
    } else if (
      (userPick === 'img1' && housePick === 'img2') ||
      (userPick === 'img2' && housePick === 'img3') ||
      (userPick === 'img3' && housePick === 'img1')
    ) {
      setGameResult('YOU LOSE');
      setHouseScore((prevScore) => prevScore + 1);
    } else {
      props.setGameResult('DRAW');
    }

    console.log('pickedByUser: ', userPick);
    console.log('props.userPick', userPick);
    console.log('random: ', housePick);
    console.log('props.housePick', housePick);
    console.log('props.GAME___RESULTS 111111', gameResult);
  }, [userPick, housePick, gameResult, navigate]);

  return (
    <section className={classes.game__result__container}>
      <Picks userPick={userPick} housePick={housePick} />

      <WinnerAnnouncement gameResult={gameResult} />

      <PlayAgainBtn />
    </section>
  );
};

export default GameResult;
