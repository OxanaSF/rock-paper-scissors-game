import React from 'react';
import { Link } from 'react-router-dom';

import classes from './PlayAgainBtn.module.css';

const PlayAgainBtn = (props) => {
  return (
    <Link to='/'>
      <button className={classes.play__again_btn}>
        <h1>PLAY AGAIN</h1>
      </button>
    </Link>
  );
};

export default PlayAgainBtn;
