import React from 'react';
import ProjectContainer from './projectContainer';

import { projects } from '../../redux/default';

import TVAPPPoster from '../../img/posterForTvApp.jpg';
import { IPropsProject } from '../../interfaces/propsProject';

export default function ProjectsList(){
  return(
    <div className="content-container full-width">
      {
        projects.map( (project: IPropsProject) => {
          return <ProjectContainer project = {project}/>
        })
      }
    </div>
  );
}