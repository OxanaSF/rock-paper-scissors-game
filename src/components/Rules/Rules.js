import React, { useState } from 'react';

import RulesBtn from './RulesBtn';
import RulesModal from './RulesModal';
// import classes from './Rules.module.css';

const Rules = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    console.log('setShowModal(false)!!')
    setShowModal(false);
  };

  return (
    <section>
      {showModal && <RulesModal onClick={hideModalHandler} />}

      <RulesBtn showModal={showModal} onClick={showModalHandler} />
    </section>
  );
};

export default Rules;
