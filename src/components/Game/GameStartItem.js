import React from "react";
import { Link } from 'react-router-dom';


import './GameStartItem.css'


const GameStartItem = (props) => {
    return (
        <Link to='/game-result' >
        <div className={props.containerCSSClass}>
          <div className={props.itemCSSClass}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${props.url}`}
              alt={props.alt}
            />
          </div>
        </div>
        </Link>
    )
}


export default GameStartItem


