import React from 'react';
import MainNav from '../Components/MainNav';
import NavSocialMedia from '../Components/NavSocialMedia';
import img1 from '../Images/LeaderPage-img1.png';
import img2 from '../Images/LeaderPage-img2.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const CelebalLife = () => {
  return (
    <div className='CelebalLifeContainer'>
        <NavSocialMedia/>
        <MainNav/>
        <div className='panel1' >
            <div>
              <h1>Let’s Work, Learn and Grow Together</h1>
              <div>
                <Link to="/careers">
                  <button>Join US</button>
                </Link>
                <Link to="/about">
                  <button>About US</button>
                </Link>
              </div>
            </div>
            <div>
              <img src={img1} alt='Img-1'/>
            </div>
        </div>
        <div className='panel2' >
            <div>
              <img src={img2} alt='Img-2'/>
            </div>
            <div>
              <h1>Fun@Work</h1>
              <p>We encourage Fun@Work as it is the key element of employee’s happiness. Some fun 
                activities with work help employees having a positive mind-set, and better mental 
                health. It is believed that happy people tend to be healthier, more inspired, 
                productive, and highly satisfied in their jobs.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CelebalLife
