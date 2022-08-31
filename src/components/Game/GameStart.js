import React, { useRef, Fragment } from 'react';

import GameStartItem from './GameStartItem';
import GameResult from './GameResult';
import classes from './GameStart.module.css';
import { ROCK_PAPER_SCISSORS_ICONS } from '../../utils/rock_paper_scissors_icons';

const Game = (props) => {
  let icon = useRef(null);

  const gameResultsHandler = (event) => {
    const random =
      Math.floor(Math.random() * ROCK_PAPER_SCISSORS_ICONS.length) + 1;

    const pickedByUser = event.currentTarget.id;

    if (pickedByUser === 'img1') {
      props.setUserPick('paper');
    }
    if (pickedByUser === 'img2') {
      props.setUserPick('scissors');
    }
    if (pickedByUser === 'img3') {
      props.setUserPick('rock');
    }

    if (pickedByUser.slice(-1) * 1 > random) {
      props.setGameResult('WIN');
    } else if (pickedByUser.slice(-1) * 1 < random) {
      props.setGameResult('YOU LOSE');
    } else {
      props.setGameResult('DRAW');
    }

    console.log('pickedByUser: ', pickedByUser);
    console.log('random: ', random);
  };

  return (
    <Fragment>
      {!props.startGame && (
        <main className={classes.game__start__container}>
          {ROCK_PAPER_SCISSORS_ICONS.map((item) => (
            <div key={item.id}>
              <GameStartItem
                id={item.id}
                containerCSSClass={item.containerCSSClass}
                itemCSSClass={item.itemCSSClass}
                url={item.url}
                alt={item.alt}
                ref={icon}
                onClick={gameResultsHandler}
                gameResult={props.gameResult}
              />
            </div>
          ))}
        </main>
      )}

      {props.startGame && (
        <main className={classes.game__result__container}>
          <GameResult userPick={props.userPick} gameResult="YOU WIN" />
        </main>
      )}
    </Fragment>
  );
};

export default Game;
