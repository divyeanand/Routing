import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube  } from "react-icons/fa6";
import {RiMailSendLine} from "react-icons/ri";

const NavSocialMedia = () => {
  return (
    <div className='navSocialMedia'>
      <div>
        <RiMailSendLine style={{marginTop:'3px'}}/>
        <h4>enterprisesales@celebaltech.com</h4>
      </div>
      <div>
        <a href='https://twitter.com/celebaltech?lang=en'><FaTwitter style={{ color: '#1DA1F2' }}/></a>
        <a href='https://www.facebook.com/celebaltechnologies/'><FaFacebookF style={{ color: '#1877F2' }}/></a>
        <a href='https://www.instagram.com/celebaltechnologies/?hl=en'><FaInstagram style={{ color: '#E4405F' }}/></a>
        <a href='https://www.linkedin.com/company/celebaltechnologies'><FaLinkedinIn style={{ color: '#0A66C2' }}/></a>
        <a href='https://www.youtube.com/channel/UCm23EobkgaSU3WN_nWC78Tw'><FaYoutube style={{ color: '#FF0000' }}/></a>
      </div>
    </div>
  )
}

export default NavSocialMedia
