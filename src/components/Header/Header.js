import React from 'react';

import Card from '../UI/Card';
import ScoreContainer from './ScoreContainer';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Card>
      <header className={classes.header}>
        <div className={classes.header__title__container}>
          <h2>ROCK</h2>
          <h2>PAPER</h2>
          <h2>SCISSORS</h2>
        </div>
        <ScoreContainer />
      </header>
    </Card>
  );
};

export default Header;
