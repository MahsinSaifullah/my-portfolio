import React from 'react';
import classNames from 'classnames';
import './projectCard.scss';
import IProject from '../../interfaces/IProject';

const imagePath = 'images/projects';

interface IProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const getImageFromUrl = (url: string) => {
    return `${imagePath}${url}`;
  };
  return (
    <div className="projectCard">
      <div className="projectCard__imageContainer">
        <img
          className="img-fluid projectCard__image"
          src={getImageFromUrl(project.images[0])}
          alt={project.name}
        />
      </div>
      <div className="projectCard__text">
        <div>
          <div className="projectCard__title">{project.name}</div>
          <span className="projectCard_tech">{project.tech}</span>
        </div>
      </div>
      <div className="projectCard__button">LEARN MORE</div>
    </div>
  );
};

export default ProjectCard;
