import React from 'react'
import NavSocialMedia from '../Components/NavSocialMedia';
import MainNav from '../Components/MainNav';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselImage1 from "../Images/Img_award2022.gif";
import CarouselImage2 from "../Images/regional-system-integration-partner.png";
import CarouselImage3 from "../Images/top-consumption-partner.png";
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div>
        <NavSocialMedia />
        <MainNav/>
      </div>
      <div className='container'>
          <Carousel className='CustomCarousel' autoPlay axis="horizontal" infiniteLoop showArrows={false}  >
              <div>
                <h2>Celebal Technologies recognized as the winner of 2022 Microsoft India Partner
                   of the Year for the 2nd time in a row</h2>
                <img src={CarouselImage1} alt="logo" />
              </div>
              <div>
                <img src={CarouselImage2} alt="logo" />
                <img src={CarouselImage3} alt="top-consumption-partner" />
              </div>
          </Carousel>
      </div>
      <div className='panel1'>
            <h1>OUR COMPETENCIES</h1>
              <div className='services_row'> 
                <div>
                  <a href='https://celebaltech.com/artificialintelligence'>A</a>
                </div>
                <div>
                  <a href='https://celebaltech.com/bigdata'>B</a>
                </div>
                <div>
                  <a href='https://celebaltech.com/cloud-innovation'>C</a>
                </div>
                <div>
                  <a href='https://celebaltech.com/dynamic-365'>D</a>
                </div>
              </div>
          </div>
      <Footer/>
    </>
  )
}

export default Home
