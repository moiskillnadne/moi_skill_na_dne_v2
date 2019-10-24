import React from 'react';

//Link for social network
import { SocialMedia } from '../setting'



//Import ICONS
import instagram from '../img/my-icons-collection/instagram.svg';
import vk from '../img/my-icons-collection/vk.svg';
import github from '../img/my-icons-collection/github.svg';


export default function Logo (){
  return(
    <div className='wrap-logo-screen full-width grid align-center justify-center'>
      <div className='container-logo'>
        <div>
          <h1 className='logo'>//MOI_SKILL_NA_DNE</h1>
        </div>
        <div className='social-link-container grid align-center justify-center'>
          <a href={SocialMedia.instagram} className="social-link">
            <img src={instagram} alt=""/>
          </a>
          <a href={SocialMedia.vk} className="social-link">
            <img src={vk} alt=""/>
          </a>
          <a href={SocialMedia.github} className="social-link">
            <img src={github} alt=""/>
          </a>
        </div>
      </div>
    </div>
  );
}