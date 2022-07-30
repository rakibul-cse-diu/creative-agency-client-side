import React from 'react';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import './Home.css';
import Partners from './Partners/Partners';
import ServiceBanner from './ServiceBanner/ServiceBanner';

const Home = () => {
    return (
        <div>
            <div className='bg-primary px-[10%] mb-0 border-none'>
                <Header />
                <HeroSection />
                {/* <div className='w-[50px] h-[50px]'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#7AB259" d="M21.1,13.4C9,33.2,-31.9,37.6,-40.2,20C-48.5,2.4,-24.3,-37.3,-3.8,-39.5C16.6,-41.7,33.3,-6.5,21.1,13.4Z" transform="translate(100 100)" />
                    </svg>
                </div> */}
            </div>
            {/* curve */}
            <div class="curve mt-0 border-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>
            <Partners />
            <ServiceBanner />
        </div>
    );
};

export default Home;