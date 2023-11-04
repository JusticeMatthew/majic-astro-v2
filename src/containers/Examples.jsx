import { useStore } from '@nanostores/react';
import { bgIsDark } from '@/store/darkBg';

export default function Examples() {
  const $bgIsDark = useStore(bgIsDark);

  return (
    <section
      id="examples"
      className="flex-col justify-center w-full min-h-[60vh] text-light transition-opacity duration-200"
    >
      <h4 className="mb-16 text-4xl sm:text-6xl font-cursive">
        Our latest client
      </h4>
      <p className="mb-8 font-medium tracking-wider max-sm:text-sm">
        B&C Pest Control
      </p>
      <div className="relative flex items-start w-full lg:items-center flex-col lg:flex-row">
        <video
          autoPlay
          playsInline
          loop
          muted
          poster="/images/bcpc-poster.webp"
          className="max-h-[30rem] lg:max-h-[25.4rem] rounded-2xl bg-transparent inline shadow mb-8 sm:mb-16"
        >
          <source src="/videos/bcpc-example.webm" type="video/webm" />
        </video>
        <div className="relative lg:ml-24">
          <h4 className="text-3xl sm:text-4xl font-cursive max-w-[25ch]">
            A <span className="text-gradient">striking</span> new website for
            Florida&apos;s finest pest control service
          </h4>
          <span className="absolute translate-y-10 -translate-x-10 text-[8rem] leading-none font-cursive text-gradient opacity-20">
            &quot;
          </span>
          <p className="mt-16 text-sm opacity-75 sm:text-lg max-w-[75ch]">
            Majic created the website for our company B&C Pest Control. We told
            them we wanted something simple and informative and they delivered
            better than we expected. We would highly recommend Majic for website
            design, especially for companies looking for someone with a creative
            eye and affordable pricing.
          </p>
          <div className="flex items-end justify-between w-full mt-8 mb-16">
            <p className="text-lg">
              Garry & JJ Reese
              <span className="block text-sm opacity-75">Owners</span>
            </p>
            <a
              href="https://www.bandcpestcontrol.com/"
              alt="B and C Website"
              target="_blank"
              className="inline-flex h-10 text-xs font-light tracking-wider opacity-75 hover:opacity-100"
            >
              Visit
              <img
                src="/icons/right-arrow-icon.svg"
                alt=""
                className="mb-6 ml-2 w-[10px] h-[10px] translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
