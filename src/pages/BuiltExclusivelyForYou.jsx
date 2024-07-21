import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const FeedbackCard = ({ title }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 text-center'>
      <FontAwesomeIcon icon={faCommentDots} size='2x' className='text-custom mb-4' />
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <p className='text-gray-600'>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

const BuiltExclusivelyForYou = () => {
  return (
    <div className='bg-customGray py-12'>
      <div className='container mx-auto max-w-screen-xl px-4'>
        <h1 className='text-5xl font-bold text-black text-center mb-4'>Built exclusively for you</h1>
        <div className='max-w-3xl mb-12 mx-auto'>
          <p className='text-gray-500 text-xl text-center'>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
          </p>
        </div>
       
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <FeedbackCard title="Internal Feedback" />
          <FeedbackCard title="Internal Feedback" />
          <FeedbackCard title="Internal Feedback" />
          <FeedbackCard title="Internal Feedback" />
        </div>
      </div>
    </div>
  );
};

export default BuiltExclusivelyForYou;
