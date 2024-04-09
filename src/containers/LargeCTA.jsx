import Button from '@/components/Button.jsx';

export default function LargeCTA() {
  return (
    <section className="md:flex h-[80vh] hidden justify-center flex-col gap-20 group/stars">
      <div className="absolute w-screen bg-[#20204E] left-0 h-[80vh] overflow-y-clip"></div>
      <h2 className="z-10 text-8xl font-bold text-light/80 leading-[1.15]">
        Let's cast a spell of{' '}
        <span className="relative after:absolute after:bottom-0 after:left-0 after:bg-primary-gradient after:w-[24.6rem] after:h-2 after:rounded-full">
          success
        </span>{' '}
        for your online endeavors
      </h2>
      <div>
        <Button>
          <p className="px-20">Get in touch</p>
        </Button>
      </div>
    </section>
  );
}
