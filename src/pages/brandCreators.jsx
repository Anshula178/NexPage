import React from 'react';
import img1 from '../Assests/target.png';

const BrandCreators = () => {
  return (
    <div className='bg-gray-100 py-12 mt-12  '>
      <div className='container mx-auto px-4'>
        <h1 className='text-5xl font-bold text-center mb-6'>We're experts and brand creators</h1>
        <p className='text-center text-gray-700 mb-12 max-w-2xl mx-auto'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
        </p>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
            <div className='max-w-lg mb-8 mx-auto'>
              <h1 className='font-bold text-4xl font-serif py-3'>79<span className='text-5xl'>%</span></h1>
              <p className='text-gray-600'>Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
            </div>
            <div className='max-w-lg mb-8 mx-auto'>
              <h1 className='font-bold text-4xl font-serif py-3'>1<span className='text-5xl'>M</span><sup>+</sup></h1>
              <p className='text-gray-600'>Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
            </div>
            <div className='max-w-lg mb-8 mx-auto'>
              <h1 className='font-bold text-4xl font-serif py-3'>500<span className='text-5xl'>K</span></h1>
              <p className='text-gray-600'>Lorem ipsum is placeholder text used in the graphic, print, and publishing for previewing layouts.</p>
            </div>
          </div>
          <div className='w-full md:max-w-xl flex justify-center'>
            <img src={img1} alt="Brand Target" className='max-w-full h-auto rounded-lg shadow-md' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCreators;
