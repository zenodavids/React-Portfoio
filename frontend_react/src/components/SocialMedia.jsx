import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a
        href='https://www.linkedin.com/in/chidozieezeanekwe/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href='https://twitter.com/zenodavids'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsTwitter />
      </a>
    </div>

    <div>
      <a
        href='https://instagram.com/zenodavids'
        target='_blank'
        rel='noopener noreferrer'
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
