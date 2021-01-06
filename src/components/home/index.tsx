import React, { useState } from 'react';
import { InlineIcon } from '@iconify/react';
import bxRightArrowAlt from '@iconify-icons/bx/bx-right-arrow-alt';
import bxDownArrowAlt from '@iconify-icons/bx/bx-down-arrow-alt';

import './index.scss';

const Home: React.FC = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div className="home">
      <div className="home__title">
        Hello I'm <span>Mahsin Saifullah</span>
        <br />I am a software developer
      </div>
      <div
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className="home__button"
      >
        View my Work{' '}
        {isMouseOver ? (
          <InlineIcon className="home__icon" icon={bxDownArrowAlt} />
        ) : (
          <InlineIcon className="home__icon" icon={bxRightArrowAlt} />
        )}
      </div>
    </div>
  );
};

export default Home;
