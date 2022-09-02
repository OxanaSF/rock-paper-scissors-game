import { Link } from 'react-router-dom';
import React, { forwardRef } from 'react';

import './GameItem.css';

const GameStartItem = forwardRef((props, ref) => {
  return (
    <Link to="/game-result" ref={ref} onClick={props.onClick} id={props.id}>
      <div className={props.containerCSSClass}>
        <div className={props.itemCSSClass}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${props.url}`}
            alt={props.alt}
          />
        </div>
      </div>
    </Link>
  );
});

export default GameStartItem;
