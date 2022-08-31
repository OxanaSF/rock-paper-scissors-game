import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/Layout/MainLayout';
import Header from './components/Header/Header';
import Game from './components/Game/GameStart';
import Rules from './components/Rules/Rules';
import GameResult from './components/Game/GameResult';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [userPick, setUserPick] = useState('');
  const [gameResult, setGameResult] = useState('YOU WIN');

  return (
    <BrowserRouter>
      <MainLayout>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Game
                startGame={startGame}
                setStartGame={setStartGame}
                gameResult={gameResult}
                setGameResult={setGameResult}
                userPick={userPick}
                setUserPick={setUserPick}
              />
            }
          />

          <Route
            path="/game-result"
            element={
              <GameResult
                gameResult={gameResult}
                setGameResult={setGameResult}
                userPick={userPick}
                setUserPick={setUserPick}
              />
            }
          />
        </Routes>

        <Rules />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
