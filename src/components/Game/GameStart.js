import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import GameStartItem from './GameStartItem';
import classes from './GameStart.module.css';
import { ROCK_PAPER_SCISSORS_ICONS } from '../../utils/rock_paper_scissors_icons';

const Game = () => {
  const [userPick, setUserPick] = useState('');
  const [housePick, setHousePick] = useState('');
  const [userWon, setUserWon] = useState(false);
  const [houseWon, setHouseWon] = useState(false);

  return (
    <main className={classes.game__container}>
      {ROCK_PAPER_SCISSORS_ICONS.map((item) => (
        <div key={item.id}>
          <GameStartItem
            containerCSSClass={item.containerCSSClass}
            itemCSSClass={item.itemCSSClass}
            url={item.url}
            alt={item.alt}
          />
        </div>
      ))}
    </main>
  );
};

export default Game;
