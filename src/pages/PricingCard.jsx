import React, { useState } from 'react';

const PricingCards = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      title: 'Essential',
      monthlyPrice: '$49/mo',
      yearlyPrice: '$39/mo',
      description: 'Better insights for growing businesses that want more customers.',
      features: [
        '50 Placeholder text commonly',
        'Consectetur adipiscing elit',
        'Excepteur sint occaecat cupidatat',
        'Officia deserunt mollit anim',
      ],
      buttonText: 'Start free trial',
    },
    {
      title: 'Premium',
      monthlyPrice: '$79/mo',
      yearlyPrice: '$63/mo',
      description: 'Better insights for growing businesses that want more customers.',
      features: [
        '100 Placeholder text commonly',
        'Consectetur adipiscing elit',
        'Excepteur sint occaecat cupidatat',
        'Officia deserunt mollit anim',
        'Placeholder text commonly used',
      ],
      buttonText: 'Start free trial',
      popular: true,
    },
    {
      title: 'Advanced',
      monthlyPrice: '$129/mo',
      yearlyPrice: '$103/mo',
      description: 'Better insights for growing businesses that want more customers.',
      features: [
        '200 Placeholder text commonly',
        'Consectetur adipiscing elit',
        'Excepteur sint occaecat cupidatat',
        'Officia deserunt mollit anim',
        'Voluptate velit esse cillum',
        'Placeholder text commonly used',
      ],
      buttonText: 'Start free trial',
    },
  ];

  return (
    <div className='bg-gray-100 py-12'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <h1 className='text-5xl font-bold text-center mb-4'>Find the right plan for your business</h1>
        <div className='flex justify-center mb-8'>
          <button
            onClick={() => setYearly(false)}
            className={`px-4 py-2 mr-2 rounded-md ${!yearly ? 'bg-customBlue text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Pay Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-4 py-2 ml-2 rounded-md ${yearly ? 'bg-customBlue text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Pay Yearly (-20%)
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white shadow-md rounded-lg p-6 ${plan.popular ? 'border-2 border-blue-500' : ''}`}>
              {plan.popular && (
                <span className='text-white bg-customBlue py-1 px-3 rounded-full absolute top-4 right-4'>
                  Most Popular
                </span>
              )}
              <h2 className='text-2xl font-bold mb-4'>{plan.title}</h2>
              <p className='text-4xl font-bold mb-4'>{yearly ? plan.yearlyPrice : plan.monthlyPrice}</p>
              <p className='text-gray-700 mb-6'>{plan.description}</p>
              <ul className='text-gray-700 mb-6'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='mb-2'>- {feature}</li>
                ))}
              </ul>
              <button className='bg-customBlue text-white px-4 py-2 rounded-md hover:bg-customBlue'>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
