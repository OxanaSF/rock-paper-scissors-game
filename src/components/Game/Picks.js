import React from 'react';
import { useSelector } from 'react-redux';

import GameStartItem from './GameStartItem';
import classes from './Picks.module.css';
import { ROCK_PAPER_SCISSORS_ICONS } from '../../utils/rock_paper_scissors_icons';

const Picks = (props) => {
  const userPick = useSelector((state) => state.userPick.userPick);
  const housePick = useSelector((state) => state.housePick.housePick);


  return (
    <div className={classes.picks__container}>
      <div>
        {ROCK_PAPER_SCISSORS_ICONS.filter(
          (item) => item.id === userPick
        ).map((icon) => (
          <div key={icon.id}>
            <GameStartItem
              id={icon.id}
              containerCSSClass={icon.containerCSSClass}
              itemCSSClass={icon.itemCSSClass}
              url={icon.url}
              alt={icon.alt}
            />
          </div>
        ))}
        <h3>YOU PICKED</h3>
 
      </div>

      <div className={classes.house__pick}>
        {ROCK_PAPER_SCISSORS_ICONS.filter(
          (item) => item.id === housePick
        ).map((icon) => (
          <div key={icon.id}>
            <GameStartItem
              id={icon.id}
              containerCSSClass={icon.containerCSSClass}
              itemCSSClass={icon.itemCSSClass}
              url={icon.url}
              alt={icon.alt}
            />
          </div>
        ))}
        <h3>THE HOUSE PICKED</h3>
      </div>
    </div>
  );
};

export default Picks;
