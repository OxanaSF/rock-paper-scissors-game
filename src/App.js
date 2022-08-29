import React from 'react';

import MainLayout from './components/Layout/MainLayout';
import Header from './components/Header';
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';

function App() {
  return (
    <MainLayout>
      <Header />
      <Game />
      <Rules />
    </MainLayout>
  );
}

export default App;
