import React from "react";



import classes from './RulesBtn.module.css'





const RulesBtn = (props) => {
    return (
        <button 
            className={classes.rules__btn}
            onClick={props.onClick}
            >
            RULES
        </button>
    )
}


export default RulesBtn