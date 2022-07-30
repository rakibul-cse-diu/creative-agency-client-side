import React from 'react';
import hero from '../../../assets/images/logos/Frame.png';

const HeroSection = () => {
    return (
        <div class="hero bg-transparent mt-[70px]">
            <div class="hero-content flex-col md:flex-row-reverse justify-between">
                <div className='w-full md:w-1/2'>
                    <img src={hero} class="w-full rounded-lg" alt='hero' />
                </div>
                <div className='md:w-1/2'>
                    <h1 class="text-5xl font-bold">Let’s Grow Your <br />
                        Brand To The <br />
                        Next Level</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-secondary capitalize text-base-100">Hire Us</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;