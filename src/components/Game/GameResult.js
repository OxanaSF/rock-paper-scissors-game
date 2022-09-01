import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Picks from './Picks';
import WinnerAnnouncement from './WinnerAnnouncement';
import PlayAgainBtn from './PlayAgainBtn';
import classes from './GameResult.module.css';

import { userScoreActions } from '../../store/index';
import { houseScoreActions } from '../../store/index';

const GameResult = (props) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
 
    userPick,
    housePick,
    gameResult,
    setGameResult,

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
      setTimeout(() => {
        dispatch(userScoreActions.increment());
      }, 2000);
      setGameResult('YOU WIN');
    } else if (
      (userPick === 'img1' && housePick === 'img2') ||
      (userPick === 'img2' && housePick === 'img3') ||
      (userPick === 'img3' && housePick === 'img1')
    ) {
      setTimeout(() => {
        dispatch(houseScoreActions.increment());
      }, 2000);

      setGameResult('YOU LOSE');
    } else {
      props.setGameResult('DRAW');
    }

    console.log('pickedByUser: ', userPick);
    console.log('props.userPick', userPick);
    console.log('random: ', housePick);
    console.log('props.housePick', housePick);
    console.log('props.GAME___RESULTS 111111', gameResult);
  }, [
    userPick,
    housePick,
    // gameResult,
    navigate,
    setGameResult,

    dispatch,
  ]);

  return (
    <section className={classes.game__result__container}>
      <Picks userPick={userPick} housePick={housePick} />

      <WinnerAnnouncement gameResult={gameResult} />

      <PlayAgainBtn />
    </section>
  );
};

export default GameResult;
