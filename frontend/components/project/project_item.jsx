import React from 'react';
import ProjectIndex from './project_index';

const ProjectItem = ({ project }) => {

  return (
    <div>
      <li>{project.title}</li>
      
    </div>

  )
}

export default ProjectItem;
