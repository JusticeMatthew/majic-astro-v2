import { useState } from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '@/constants/pricingPlans.js';

export default function CombinedServices() {
  const [personal, business, commerce] = pricingPlans;
  const [activePlan, setActivePlan] = useState(business);

  const handleTabChange = (tabName) => {
    if (tabName === 'Personal') {
      setActivePlan(personal);
    }
    if (tabName === 'Business') {
      setActivePlan(business);
    }
    if (tabName === 'Commerce') {
      setActivePlan(commerce);
    }
  };

  return (
    <motion.div
      layout
      className="flex flex-col items-center mt-20 sm:mt-32 text-dark tablet:hidden"
    >
      <motion.div
        layout
        className="flex flex-col justify-between h-auto py-16 shadow bg-light rounded-b-2xl relative w-full"
      >
        <motion.div
          layout
          className="absolute flex items-center w-full h-20 text-lg text-center -top-20 bg-light/60 rounded-t-2xl"
        >
          {['Personal', 'Business', 'Commerce'].map((tabName) => (
            <motion.div
              layout
              key={tabName}
              className={`w-1/3 flex items-center justify-center h-full ${
                activePlan.name === tabName ? 'bg-light font-semibold' : ''
              } ${activePlan === personal ? 'rounded-tl-2xl' : ''} ${
                activePlan === commerce ? 'rounded-tr-2xl' : ''
              }`}
              onClick={() => handleTabChange(tabName)}
            >
              {tabName}
            </motion.div>
          ))}
        </motion.div>
        <h4 className="w-full text-4xl text-center font-cursive hidden sm:block">
          {activePlan.name}
        </h4>
        {activePlan.recommended && (
          <div className="absolute left-0 flex justify-center w-full text-center top-6 sm:top-28 text-light">
            <p className="px-20 py-1 font-medium rounded-full bg-primary-gradient">
              Recommended
            </p>
          </div>
        )}
        <div className="sm:flex sm:flex-row sm:mx-auto sm:mt-16">
          <div>
            <h4 className="w-full mt-8 text-4xl text-center font-cursive sm:hidden">
              {activePlan.name}
            </h4>
          </div>
          <div className="px-8 mt-8 mb-16 sm:px-12">
            {activePlan.services.map((service) => (
              <div key={service} className="flex mb-6">
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="inline ml-6">{service}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="w-full text-3xl text-center font-cursive">
            {activePlan.price}
          </p>
          <p className="w-full mt-3 text-sm text-center">
            {activePlan.monthly}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
