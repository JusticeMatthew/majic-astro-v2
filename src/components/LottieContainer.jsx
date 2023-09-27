import Lottie from 'lottie-react';

export default function LottieContainer({ src, className }) {
  return <Lottie animationData={src} className={className} />;
}
