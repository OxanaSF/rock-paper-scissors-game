import React from 'react';

import classes from './MainLayout.module.css';

const MainLayout = (props) => {
  return <section className={classes.main}>{props.children}</section>;
};

export default MainLayout;
