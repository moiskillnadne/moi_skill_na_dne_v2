import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CodeIcon from '../img/code.png'
import { get } from 'lodash';
import { IContactme } from '../interfaces/contactme';


export default function Contactme ():JSX.Element{
  return(
    <div className="contactme-screen">
      <Link to="/">
        <a href="#!" className="contact-me-btn default-button button-animation">HOME</a>
      </Link>

      <div className="contactme-background full-width">
        <img src={CodeIcon} alt="Code"/>
      </div>

      <div className="form-container grid align-center justify-center">
        <div className="form">

          <form className="grid justify-center" onSubmit={handlerForm}>
            <input type="text" 
                   placeholder="Name"
                   autoComplete="off"
                   name="name"/>
            <input type="email" 
                   placeholder="Email"
                   autoComplete="off"
                   name="email"/>
            <textarea
                   placeholder="Your idea or thanks"
                   autoComplete="off"
                   className="textarea-letter"
                   name="message"/>
            <button className="submit-button button-animation" type="submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  )


  function handlerForm(e:FormEvent){
    e.preventDefault();

    const email = get(e, 'currentTarget.email.value', '');
    const name = get(e, 'currentTarget.name.value', '');
    const message = get(e, 'currentTarget.message.value', '');

    const newForm:IContactme = {
    name,
    email,
    message,
    submitDate: new Date(),
    }

    axios.post('/contactme', {
      body: newForm,
    })
  }
}