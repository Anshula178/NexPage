import React from 'react';
import img1 from "../Assests/HomeScreen.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/Card';
import BuiltExclusivelyForYou from './BuiltExclusivelyForYou';
import Feedback from './Feedback';
import BrandCreators from './brandCreators';
import PricingCards from './PricingCard';

const HomeScreen = () => {
  return (
    <>
      <div className='bg-gray-900 py-12 relative'>
        {/* Diagonal cut */}
        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gray-900 transform -skew-y-3'></div>

        <div className='container mx-auto flex flex-col mt-20 sm:flex-row items-center max-w-screen-xl px-4 mb-32 relative z-10'>
          <div className='text-white sm:w-1/2'>
            <h1 className='text-7xl font-bold font-sans mb-10'>Create Stunning Web Experiences</h1>
            <p className='mb-6 text-lg font-sans text-gray-400'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            <div className='space-x-4'>
              <button className=' text-white px-4 py-3 rounded-md hover:bg-customBlue mt-8 bg-customBlue'>Request Demo<FontAwesomeIcon icon={faArrowRight} className='ml-2' /></button>
              <button className='bg-gray-700 text-white px-4 py-3 rounded-md hover:bg-gray-500'>Explore Product</button>
            </div>
          </div>
          <div className='sm:w-1/2 mt-8 sm:mt-0'>
            <img src={img1} alt="Home Screen" className='w-full rounded-md shadow-md' />
          </div>
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mt-28 mb-28'>
        <Card />
      </div>
      <BuiltExclusivelyForYou/>
      <Feedback/>
      <BrandCreators/>
      <PricingCards/>
    </>
  );
};

export default HomeScreen;
