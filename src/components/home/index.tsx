import React from 'react';
import './index.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__title">
        Hello I'm <span>Mahsin Saifullah</span>
        <br />I am a software developer
      </div>
      <div className="home__button">View my Work</div>
    </div>
  );
};

export default Home;
