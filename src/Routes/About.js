import React from 'react'
import MainNav from '../Components/MainNav'
import NavSocialMedia from '../Components/NavSocialMedia'
import founder1 from '../Images/Anirudh.png';
import founder2 from '../Images/Anupam.png';
import partner1 from '../Images/GoldBadge.jpeg';
import partner2 from '../Images/databricks.webp';
import Footer from './Footer';

const About = () => {
  return (
    <div className='aboutContainer'>
        <NavSocialMedia/>
        <MainNav/>
        <div className='panel1'>
          <h1>About Us</h1>
        </div>
        <div className='panel2'>
          <h1>Our Story</h1>
          <p>We aim to make data simple for enterprises across the globe and propel
             them in their innovation journeys. We help Fortune 1000 companies leverage
             their data by combining modern analytics with traditional enterprise.</p>
          <h1>Company Profile</h1>
          <p>Celebal Technologies is a premier software services company in the field 
            of Data Science, Big Data, and Enterprise Cloud. We help you achieve a competitive 
            advantage with intelligent data solutions, built using cutting-edge technology. 
            Our core offerings are around Cloud Innovation, Supply Chain Analytics, Chat Bots, 
            Power Platforms, and Data Analytics. Our solutions can help you accelerate decision-making 
            and take giants leaps in your digital transformation journeys.</p>
        </div>
        <div className='panel3' >
          <h1>Our Founders</h1>
          <div className='founder-images'>
            <div>
              <img src={founder1} alt='Founder-1'/>
              <h4>Anirudh Kala</h4>
              <p>Co-founder, Director</p>
            </div>
            <div>
              <img src={founder2} alt='Founder-2'/>
              <h4>Anupam Gupta</h4>
              <p>Co-founder, Head of US Operations</p>
            </div>
          </div>
        </div>
        <div className='panel4' >
          <h1>Our Partners</h1>
          <div className='partner-images'>
            <img src={partner1} alt='Partner-1'/>
            <img src={partner2} alt='Partner-2'/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About