import ParallaxText from './ParallaxText.jsx';

export default function ScrollingWords() {
  return (
    <div className="flex flex-row min-h-[16rem] sm:min-h-[24rem] pointer-events-none items-center">
      <ParallaxText
        baseVelocity={1}
        className="uppercase text-7xl font-cursive sm:text-9xl md:my-0"
      >
        Abracadabra Presto Alakazam Hocus Pocus
      </ParallaxText>
    </div>
  );
}

// combine this and parallax text into one component and rename PT to wrapper
