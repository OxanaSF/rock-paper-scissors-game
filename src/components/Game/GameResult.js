import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Picks from './Picks';
import WinnerAnnouncement from './WinnerAnnouncement';
import PlayAgainBtn from './PlayAgainBtn';
import classes from './GameResult.module.css';

import { userScoreActions } from '../../store/user-score-slice';
import { houseScoreActions } from '../../store/house-score-slice';
import { gameResultActions } from '../../store/game-result-slice';
import { placeholderStyleActions } from '../../store/placeholder-style-slice';

const GameResult = () => {
  const userPick = useSelector((state) => state.userPick.userPick);
  const housePick = useSelector((state) => state.housePick.housePick);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {

    let timerOne
    let timerTwo

    if (!userPick || !housePick) {
      navigate('/');
    }

    dispatch(placeholderStyleActions.activate());

    if (
      (userPick === 'img1' && housePick === 'img3') ||
      (userPick === 'img2' && housePick === 'img1') ||
      (userPick === 'img3' && housePick === 'img2')
    ) {
    timerOne = setTimeout(() => {
        dispatch(userScoreActions.increment());
        dispatch(placeholderStyleActions.deactivate());
      }, 2000);
       


      dispatch(gameResultActions.winnerStateUpdate('YOU WIN'));
    } else if (
      (userPick === 'img1' && housePick === 'img2') ||
      (userPick === 'img2' && housePick === 'img3') ||
      (userPick === 'img3' && housePick === 'img1')
    ) {
       timerTwo = setTimeout(() => {
        dispatch(houseScoreActions.increment());
        dispatch(placeholderStyleActions.deactivate());
      }, 2000);
   

   
       


      dispatch(gameResultActions.winnerStateUpdate('YOU LOSE'));
    } else {
      dispatch(gameResultActions.winnerStateUpdate('DRAW'));
      dispatch(placeholderStyleActions.deactivate());
    }

    console.log('pickedByUser: ', userPick);
    console.log('props.userPick', userPick);
    console.log('random: ', housePick);
    console.log('props.housePick', housePick);


 
    return () => {
      clearTimeout(timerOne)
      clearTimeout(timerTwo)
    }
    
  }, [navigate, dispatch, housePick, userPick]);

  return (
    <section className={classes.game__result__container}>
      <Picks className={classes.game__result__icons} />

      <div className={classes.game__result__text}>
        <WinnerAnnouncement />
        <PlayAgainBtn className={classes.play__btn} />
      </div>
    </section>
  );
};

export default GameResult;
