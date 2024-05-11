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
      className="mt-20 flex flex-col items-center text-dark sm:mt-32 tablet:hidden"
    >
      <motion.div
        layout
        className="relative flex h-auto w-full flex-col justify-between rounded-b-2xl bg-light py-16 shadow"
      >
        <motion.div
          layout
          className="absolute -top-20 flex h-20 w-full items-center rounded-t-2xl bg-light/60 text-center text-lg"
        >
          {['Personal', 'Business', 'Commerce'].map((tabName) => (
            <motion.div
              layout
              key={tabName}
              className={`flex h-full w-1/3 items-center justify-center ${
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
        <p className="hidden w-full text-center font-cursive text-4xl sm:block">
          {activePlan.name}
        </p>
        {activePlan.recommended && (
          <div className="absolute left-0 top-6 flex w-full justify-center text-center text-light sm:top-28">
            <p className="rounded-full bg-primary-gradient px-20 py-1 font-medium">
              Recommended
            </p>
          </div>
        )}
        <div className="sm:mx-auto sm:mt-16 sm:flex sm:flex-row">
          <div>
            <h4 className="mt-8 w-full text-center font-cursive text-4xl sm:hidden">
              {activePlan.name}
            </h4>
          </div>
          <div className="mb-16 mt-8 px-8 sm:px-12">
            {activePlan.services.map((service) => (
              <div key={service} className="mb-6 flex">
                <img
                  src="/icons/check-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="ml-6 inline">{service}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="w-full text-center font-cursive text-3xl">
            {activePlan.price}
          </p>
          <p className="mt-3 w-full text-center text-sm">
            {activePlan.monthly}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
