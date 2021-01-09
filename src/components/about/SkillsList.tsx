import React from 'react';
import './skillsList.scss';

interface ISkill {
  name: string;
  parcentage: string;
}

interface ISkillsListProps {
  skills: ISkill[];
}

const SkillsList: React.FC<ISkillsListProps> = ({ skills }) => {
  return (
    <div className="skillsLists">
      {skills.map((skill) => {
        return (
          <div className="skillsList__bar">
            <div className="skillsList__tag">{skill.name}</div>
            <div
              style={{ width: skill.parcentage }}
              className="skillsList__fill"
            ></div>
            <div className="skillsList__parcentage">{skill.parcentage}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsList;
