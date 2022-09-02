import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/Layout/MainLayout';
import Header from './components/Header/Header';
import GameStart from './components/Game/GameStart';
import Rules from './components/Rules/Rules';
import GameResult from './components/Game/GameResult';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Header />

        <Routes>
          <Route path="/" element={<GameStart />} />
          <Route path="/game-result" element={<GameResult />} />
        </Routes>

        <Rules />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
