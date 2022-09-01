import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/Layout/MainLayout';
import Header from './components/Header/Header';
import GameStart from './components/Game/GameStart';
import Rules from './components/Rules/Rules';
import GameResult from './components/Game/GameResult';

function App() {
  const [startGame, setStartGame] = useState(false);
  const [userPick, setUserPick] = useState('');
  const [housePick, setHousePick] = useState('');
  const [gameResult, setGameResult] = useState('Initial');
  const [userScore, setUserScore] = useState(0);
  const [houseScore, setHouseScore] = useState(0);

  return (
    <BrowserRouter>
      <MainLayout>
        <Header
          userScore={userScore}
          setUserScore={setUserScore}
          houseScore={houseScore}
          setHouseScore={setHouseScore}
        />

        <Routes>
          <Route
            path="/"
            element={
              <GameStart
                startGame={startGame}
                setStartGame={setStartGame}
                gameResult={gameResult}
                setGameResult={setGameResult}
                userPick={userPick}
                setUserPick={setUserPick}
                housePick={housePick}
                setHousePick={setHousePick}
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
                housePick={housePick}
                userScore={userScore}
                setUserScore={setUserScore}
                houseScore={houseScore}
                setHouseScore={setHouseScore}

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
