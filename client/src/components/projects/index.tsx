import React from 'react';
import ProjectContainer from './projectContainer';

import { projects } from '../../redux/default';
import { IPropsProject } from '../../interfaces/propsProject';

export default function ProjectsList() {
  return (
    <div className="content-container full-width">
      {projects.map(
        (project: IPropsProject): JSX.Element => (
          <ProjectContainer project={project} key={project.title + project.gitLink} />
        )
      )}
    </div>
  );
}
