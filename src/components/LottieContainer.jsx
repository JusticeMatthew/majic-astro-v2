import React from 'react';
import Lottie from 'lottie-react';

const LottieContainer = ({ src, className }) => {
  return <Lottie animationData={src} className={className} />;
};

export default LottieContainer;
