import React from 'react';
import { Link } from 'react-router-dom'

import Logo from './Logo';
import ProjectsList from './projects'


export default function Home (){
  return(
    <div>
      <Link to="/contactme">
        <a href="#!" className="contact-me-btn default-button button-animation">CONTACT ME</a>
      </Link>

      <Logo />
      <ProjectsList />
    </div>
  )
}