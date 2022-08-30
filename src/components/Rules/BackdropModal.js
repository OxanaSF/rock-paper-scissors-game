import React from 'react';
import { createPortal } from 'react-dom';

import classes from './BackdropModal.module.css';

const BackdropModal = (props) => {
  
  return createPortal(
    <div className={classes.backdrop} onClick={props.onClick}>

      
    </div>,
    document.getElementById('backdrop-root')
  );
};

export default BackdropModal;
