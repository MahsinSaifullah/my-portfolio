import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Navbar />
    </>
  );
};

export default App;
