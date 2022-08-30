import React from "react";

import Picks from "./Picks";
import WinnerAnnouncement from './WinnerAnnouncement'
import PlayAgainBtn from './PlayAgainBtn'
import classes from './GameResult.module.css'



const GameResult = () => {

    return (
        <section className={classes.game__result__container}>
            <Picks />
            <WinnerAnnouncement />
            <PlayAgainBtn />
        </section>
    )
}



export default GameResult