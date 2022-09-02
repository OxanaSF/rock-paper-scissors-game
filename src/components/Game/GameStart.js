import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import GameItem from './GameItem';
import classes from './GameStart.module.css';
import { ROCK_PAPER_SCISSORS_ICONS } from '../../utils/rock_paper_scissors_icons';

import { userPickActions } from '../../store/user-pick-slice';
import { housePickActions } from '../../store/house-pick-slice';

const Game = (props) => {
  const dispatch = useDispatch();

  const icon = useRef(null);

  const gameResultsHandler = (event) => {
    if (!event.currentTarget.id) {
      return;
    }
    const pickedByUser = event.currentTarget.id;

    dispatch(userPickActions.userPickUpdate(pickedByUser));

    const random =
      Math.floor(Math.random() * ROCK_PAPER_SCISSORS_ICONS.length) + 1;

    if (random === 1) {
      dispatch(housePickActions.housePickUpdate('img1'));
    } else if (random === 2) {
      dispatch(housePickActions.housePickUpdate('img2'));
    } else {
      dispatch(housePickActions.housePickUpdate('img3'));
    }
  };

  return (
    <main className={classes.game__start__container}>
      {ROCK_PAPER_SCISSORS_ICONS.map((item) => (
        <div key={item.id}>
          <GameItem
            id={item.id}
            containerCSSClass={item.containerCSSClass}
            itemCSSClass={item.itemCSSClass}
            url={item.url}
            alt={item.alt}
            ref={icon}
            onClick={gameResultsHandler}
          />
        </div>
      ))}
    </main>
  );
};

export default Game;
