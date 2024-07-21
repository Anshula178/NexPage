import React, { useState } from 'react';
import img2 from '../Assests/img2.jpg'; // Ensure this path is correct

const Feedback = () => {
    const [imgSrc, setImgSrc] = useState(img2);
    const [selectedBox, setSelectedBox] = useState(null);

    const handleImg = (newImgSrc, boxId) => {
        setImgSrc(newImgSrc);
        setSelectedBox(boxId);
    };

    return (
        <div className='bg-white py-12'>
            <div className='container mx-auto max-w-screen-xl px-4'>
                <h1 className='text-5xl text-black font-sans mx-auto max-w-3xl font-bold text-center mb-12'>
                    The quick brown fox jumped over the lazy dog
                </h1>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='text-center mb-18 lg:mb-0'>
                        <img src={imgSrc} alt="Selected" className='mx-auto rounded-lg shadow-md w-full max-w-md transition-all duration-500 ease-in-out' />
                    </div>
                    <div className='flex flex-col lg:w-1/2'>
                        <div className='bg-white p-6 cursor-pointer'>
                            <h1 className='text-black text-4xl font-semibold mb-2'>Built exclusively for you</h1>
                            <p className='text-gray-600 text-xl'>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 gap-3'>
                            {[1, 2, 3].map((id) => (
                                <div
                                    key={id}
                                    className={`bg-white shadow-md rounded-lg p-6 cursor-pointer ${selectedBox === id ? 'border-2 border-blue-500' : ''}`}
                                    onClick={() => handleImg(img2, id)}
                                >
                                    <h1 className='text-black text-2xl font-semibold mb-2'>Internal Feedback</h1>
                                    <p className='text-gray-600'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam eius reiciendis error modi accusantium adipisci cupiditate eos autem impedit.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
