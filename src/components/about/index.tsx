import React from 'react';
import CustomHeader from '../common/CustomHeader';
import ImageIntro from './ImageIntro';
import SkillsList from './SkillsList';
import './index.scss';

const skills = [
  { name: 'HTML', parcentage: '90%' },
  { name: 'CSS', parcentage: '90%' },
  { name: 'SCSS', parcentage: '70%' },
  { name: 'Javascript', parcentage: '80%' },
  { name: 'Typescript', parcentage: '80%' },
  { name: 'React', parcentage: '80%' },
  { name: 'Redux', parcentage: '70%' },
  { name: 'React Native', parcentage: '65%' },
  { name: 'NodeJs', parcentage: '60%' },
  { name: 'ExpressJs', parcentage: '60%' },
  { name: 'MongoDB', parcentage: '55%' },
  { name: 'Python 3', parcentage: '50%' },
  { name: 'C++', parcentage: '45%' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <CustomHeader title="About" />
      <div className="container fluid">
        <div className="row">
          <div className="col-lg-6">
            <ImageIntro />
          </div>
          <div className="col-lg-6">
            <SkillsList skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
