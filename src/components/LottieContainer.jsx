import { useLottie } from 'lottie-react';

export default function LottieContainer({ src, className }) {
  const { View } = useLottie({ animationData: src });

  return <div className={className}>{View}</div>;
}
