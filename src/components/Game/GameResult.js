import React, { useEffect } from 'react';

import Picks from "./Picks";
import WinnerAnnouncement from './WinnerAnnouncement';
import PlayAgainBtn from './PlayAgainBtn';
import classes from './GameResult.module.css';



const GameResult = (props) => {

  useEffect(() => {
    console.log(props.gameResult)
  }, [])


  return (
    <section className={classes.game__result__container}>
     

      <Picks 
        //  id={props.id}
        //  containerCSSClass={props.containerCSSClass}
        //  itemCSSClass={props.itemCSSClass}
        //  url={props.url}
        //  alt={props.alt}
         userPick={props.userPick}
       
      />
     
      <WinnerAnnouncement gameResult={props.gameResult} />
      <PlayAgainBtn />
    </section>
  );
};

export default GameResult;
