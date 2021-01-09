import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
    </>
  );
};

export default App;
