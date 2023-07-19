import React from 'react';
import MainNav from '../Components/MainNav';
import NavSocialMedia from '../Components/NavSocialMedia';
import img1 from '../Images/CareerImg1.svg';
import img2 from '../Images/CareerImg2.png';
import CareerService1 from '../Images/CareerService_Pay.svg';
import CareerService2 from '../Images/CareerService_healthcare.svg';
import CareerService3 from '../Images/CareerService_Learn.svg';
import CareerService4 from '../Images/CareerService_Party.svg';
import CareerService5 from '../Images/CareerService_Team.svg';
import CareerService6 from '../Images/CareerService_Food.svg';
import Footer from './Footer';

const Careers = () => {
  return (
    <div className='careerContainer'>
        <NavSocialMedia/>
        <MainNav/>
        <div className='panel1'>
          <h1>Carrers</h1>
          <p>Join our team of creative professionals</p>
        </div>
        <div>
            <div className='panel2' >
                <div>
                <h1>WHO WE ARE</h1>
                <p>Celebal Technologies is a premier software services company in the field of Data Science, 
                    Big Data, and Enterprise Cloud. Our solutions are powered by Robotics, Artificial Intelligence, 
                    and Machine Learning algorithms which offer improved business efficiency in this interconnected 
                    world. Our talented team of industry professionals has strong expertise in diverse 
                    industry-standard technologies along with niche emerging areas including Blockchain, Analytics 
                    & Visualization, IoT, Chatbot, Data Science- AI & ML. We help modernize legacy and on-premise 
                    applications by leveraging modern cloud paradigms such as Microservices, Advanced Analytics, 
                    API Management, and other Cloud-native services.</p>
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
                <h1>WHY CELEBAL TECHNOLOGIES</h1>
                <p>At Celebal Technologies, you will work with the world’s most talented data scientists, engineers, 
                    and thought leaders to transform modern enterprises. From data scientists, marketing and business 
                    analysts, to finance and support positions – we provide a host of exciting career opportunities 
                    with global interactions along with a friendly, dynamic workplace.</p>
                </div>
            </div>
            <hr/>
        </div>
        <div className='panel3'>
            <h1>AT YOUR SERVICE</h1>
            <div className='services'>
                <div className='services_row'>
                    <div>
                        <img src={CareerService1} alt='CareerService1'/>
                        <p>Competitive Pay</p>
                    </div>
                    <div>
                        <img src={CareerService2} alt='CareerService2'/>
                        <p>Comprehensive Health Plans</p>
                    </div>
                    <div>
                        <img src={CareerService3} alt='CareerService3'/>
                        <p>Learning & Development</p>
                    </div>
                </div>
                <div className='services_row'>
                    <div>
                        <img src={CareerService4} alt='CareerService4'/>
                        <p>Competitive Pay</p>
                    </div>
                    <div>
                        <img src={CareerService5} alt='CareerService5'/>
                        <p>Competitive Pay</p>
                    </div>
                    <div>
                        <img src={CareerService6} alt='CareerService6'/>
                        <p>Competitive Pay</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='panel4'>
            <h1>SEARCH YOUR OPPORTUNITY</h1>
            <div className='card'>
                <h2>Job Vacancies</h2>
                <p>Searching for the right job for your industry journey?</p>
                <button> Explore opportunities </button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Careers
