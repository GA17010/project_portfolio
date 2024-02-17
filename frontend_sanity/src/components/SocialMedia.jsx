import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';


const SocialMedia = () => {

  const openLinkInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="app__social">
        <div onClick={() => openLinkInNewTab('https://www.linkedin.com/in/gustavo-adolfo-gutierrez-aguirre/')}>
          <BsLinkedin />
        </div>
        <div onClick={() => openLinkInNewTab('https://github.com/GA17010')}>
          <BsGithub />
        </div>
        <div onClick={() => openLinkInNewTab('https://twitter.com/gustavo09_dev')}>
          <BsTwitter />
        </div>
        <div onClick={() => openLinkInNewTab('https://www.instagram.com/ado_aguirre/')}>
          <BsInstagram />
        </div>
      </div>
    </>
  )
};

export default SocialMedia;
