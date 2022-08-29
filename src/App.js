import React from 'react';

import MainLayout from './components/Layout/MainLayout';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <MainLayout>
      <Header />
      <Game />
      <div>Element 3</div>
    </MainLayout>
  );
}

export default App;
