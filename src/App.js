import React from 'react'

import MainLayout from './components/Layout/MainLayout'
import Header from './components/Header';


function App() {
  return (
    <MainLayout>
        <Header />
        <div>Element 2</div>
        <div>Element 3</div>
    </MainLayout>
  );
}

export default App;
