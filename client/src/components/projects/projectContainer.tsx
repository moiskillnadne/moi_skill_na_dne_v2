import React from 'react';
import { IPropsProject } from '../../interfaces/propsProject'

// Some images
import RightArrow from '../../img/my-icons-collection/arrow-to-right-white.svg';
import Github from '../../img/my-icons-collection/github.svg';


export default function projectContainer (props: IPropsProject){
  return(
    <div>
      <div className="project-item full-width grid align-center">

        {/* Part with info about project */}
        <div className="about-project-container full-width grid justify-center align-center">

          <div className="img-project-container full-width grid justify-center align-center">
              <a href="!#">
                <div className="img-project">
                  <span className="img-layout grid align-center justify-center">
                    <div className="wrap-link-to-code grid justify-center">
                      <a href={props.gitLink}>
                        <img src={Github} alt=""/>
                      </a>
                      <p>Link to code</p>
                    </div>
                  </span>
                  <img src={props.image} alt="Icon for project"/>
                </div>
              </a>
          </div>

          <div className="info-project-container full-width grid">
            <div className="title-description full-width grid align-center justify-center">
                <div>
                  <h3>{props.title}</h3>
                  <p>{props.description}</p>
                </div>
            </div>
            <div className="full-width grid align-end justify-center">
            </div>  
          </div>
        </div>

        {/* Hidden part with link - button */}
        <div className="link-button-container full-width">
            <a href={props.projectLink} className="link-button grid align-center justify-center full-width">
              <img src={RightArrow} alt="Right arrow"/>
            </a>
        </div>
      </div>
    </div>
  )
}