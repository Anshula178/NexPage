import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faFile, faFileArchive, faFileArrowUp, faFileCircleCheck, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <>
    <div className='bg-white rounded-lg  p-6 text-center'>
       
       <FontAwesomeIcon icon={faHeart}  className='text-white  mb-4 bg-blue-700 px-4 py-4 rounded-full'/> 
       
     
      <h2 className='text-2xl font-semibold mb-2'>Lorem Ipsum </h2>
      <p className='text-gray-600'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    <div className='bg-white rounded-lg  p-6 text-center'>
       
     <FontAwesomeIcon icon={faThumbsUp}  className='text-white  mb-4 bg-blue-700 px-4 py-4 rounded-full'/> 
    
  
   <h2 className='text-2xl font-semibold mb-2'>Lorem Ipsum </h2>
   <p className='text-gray-600 font-sans '>
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
   </p>
 </div>
 <div className='bg-white rounded-lg  p-6 text-center'>
       
 <FontAwesomeIcon icon={faFile}  className='text-white  mb-4 bg-customLightBlue px-4 py-4 rounded-full'/> 
 

<h2 className='text-2xl font-semibold mb-2'>Lorem Ipsum </h2>
<p className='text-gray-600'>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
</div>
<div className='bg-white rounded-lg  p-6 text-center'>
       
       <FontAwesomeIcon icon={faFileArrowUp}  className='text-white  mb-4 bg-customLightBlue px-4 py-4 rounded-full'/> 
       
     
      <h2 className='text-2xl font-semibold mb-2'>Lorem Ipsum </h2>
      <p className='text-gray-600'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    <div className='bg-white rounded-lg  p-6 text-center'>
       
       <FontAwesomeIcon icon={faFileArchive}  className='text-white  mb-4 bg-customLightBlue px-4 py-4 rounded-full'/> 
       
     
      <h2 className='text-2xl font-semibold mb-2'>Lorem Ipsum </h2>
      <p className='text-gray-600'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    <div className='bg-white rounded-lg  p-6 text-center'>
       
       <FontAwesomeIcon icon={faFileCircleCheck}  className='text-white  mb-4 bg-customLightBlue px-4 py-4 rounded-full'/> 
       
     
      <h2 className='text-2xl font-semibold mb-2'>Lorem Ipsum </h2>
      <p className='text-gray-600'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    </>
  );
};

export default Card;
