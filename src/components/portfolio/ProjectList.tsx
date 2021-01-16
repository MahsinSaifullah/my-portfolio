import React from 'react';
import ProjectCard from './ProjectCard';
import IProject from '../../interfaces/IProject';

interface IProjectListProps {
  projects: IProject[];
}

const ProjectList: React.FC<IProjectListProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <div className="col-xxl-3 col-xl-4 col-md-6">
            <ProjectCard project={project} />
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
