import React, { useRef, Fragment } from 'react';

import GameStartItem from './GameStartItem';
import classes from './GameStart.module.css';
import { ROCK_PAPER_SCISSORS_ICONS } from '../../utils/rock_paper_scissors_icons';

const Game = (props) => {
  const icon = useRef(null);

  const gameResultsHandler = (event) => {
    if (!event.currentTarget.id) {
      return;
    }
    const pickedByUser = event.currentTarget.id;

    props.setUserPick(pickedByUser);

    const random =
      Math.floor(Math.random() * ROCK_PAPER_SCISSORS_ICONS.length) + 1;

    if (random === 1) {
      props.setHousePick('img1');
    } else if (random === 2) {
      props.setHousePick('img2');
    } else {
      props.setHousePick('img3');
    }
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
              />
            </div>
          ))}
        </main>
      )}
    </Fragment>
  );
};

export default Game;
