import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
    </>
  );
};

export default App;
