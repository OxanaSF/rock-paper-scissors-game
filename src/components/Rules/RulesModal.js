import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

import BackdropModal from './BackdropModal';
import classes from './RulesModal.module.css';

export const ModalOverlay = (props) => {
  const content = (
    // <div className={classes.modal__overlay__container}>
    <div className={classes.modal__overlay} onClick={props.onClick}>
      <h1>RULES</h1>
      <div className={classes.modal__header}>
        <h2>RULES</h2>
        <div className={classes.modal__close}>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-close.svg`}
            alt="close"
          />
        </div>
      </div>

      <div className={classes.modal__overlay__image}></div>
    </div>
    // </div>
  );

  return createPortal(content, document.getElementById('rules-modal-root'));
};

const RulesModal = (props) => {
  return (
    <Fragment>
      <BackdropModal onClick={props.onClick} />
      <ModalOverlay onClick={props.onClick} />
    </Fragment>
  );
};

export default RulesModal;
