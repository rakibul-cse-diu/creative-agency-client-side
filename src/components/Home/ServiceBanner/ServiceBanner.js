import React from 'react';
import design from '../../../assets/images/icons/service1.png';
import graphics from '../../../assets/images/icons/service2.png';
import development from '../../../assets/images/icons/service3.png';

const ServiceBanner = () => {
    return (
        <div className='mb-[100px]'>
            <h2 className='text-[34px] font-bold text-accent text-center mb-[70px]'>Provide awesome <span className='text-[#7AB259]'>services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-[15%]'>
                <div class="card bg-base-100">
                    <figure class="px-10 pt-10">
                        <img src={design} alt="Web and Mobile design" width={74} height={74} class="rounded-full" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Web & Mobile design</h2>
                        <p className='text-[14px] text-neutral'>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-2xl">
                    <figure class="px-10 pt-10">
                        <img src={graphics} alt="Graphic design" width={74} height={74} class="rounded-full" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Graphic design</h2>
                        <p className='text-[14px] text-neutral'>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                    </div>
                </div>
                <div class="card bg-base-100">
                    <figure class="px-10 pt-10">
                        <img src={development} alt="Web development" width={74} height={74} class="rounded-full" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Web development</h2>
                        <p className='text-[14px] text-neutral'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;