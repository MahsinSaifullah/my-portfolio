import React from 'react';
import profileImage from '../../assets/images/portfolioImage.jpeg';
import './imageIntro.scss';

const ImageIntro: React.FC = () => {
  return (
    <div className="imageIntro">
      <div className="imageIntro__image">
        <img
          src={profileImage}
          className="img-fluid"
          alt="mahsin's profile image"
        />
      </div>

      <h4 className="imageIntro__title">Who am I?</h4>
      <p className="imageIntro__subtitle">
        I am a software developer, specializing in front-end development. I am
        currently working as a Junior Software Engineering for{' '}
        <a href="https://www.pinrotech.com/">Pinro. </a> I firmly believe
        software engineering to be an art. That is why I love working in a
        dynamic, fun-loving, creative and collaborative working environment
        where I can explore new technologies and solve challenging problems.
      </p>
    </div>
  );
};

export default ImageIntro;
