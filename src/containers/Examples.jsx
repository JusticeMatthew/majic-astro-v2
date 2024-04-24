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
      <div className="relative flex items-start w-full tablet:items-center flex-col tablet:flex-row">
        <video
          autoPlay
          playsInline
          loop
          muted
          poster="/images/bcpc-poster.webp"
          className="max-h-[30rem] tablet:max-h-[25.4rem] rounded-2xl bg-transparent inline shadow mb-8 sm:mb-16"
        >
          <source src="/videos/bcpc-example.webm" type="video/webm" />
        </video>
        <div className="relative tablet:ml-24">
          <p className="text-3xl sm:text-4xl font-cursive max-w-[25ch]">
            A <span className="text-gradient">striking</span> new website for
            Florida&apos;s finest pest control service
          </p>
          <span className="absolute translate-y-2 -translate-x-10 text-[8rem] leading-none font-cursive text-gradient opacity-10">
            &quot;
          </span>
          <p className="mt-8 text-sm opacity-75 sm:text-tablet max-w-[75ch]">
            Majic created the website for our company B&C Pest Control. We told
            them we wanted something simple and informative and they delivered
            better than we expected. We would highly recommend Majic for website
            design, especially for companies looking for someone with a creative
            eye and affordable pricing.
          </p>
          <div className="flex items-end justify-between w-full mt-8 mb-16">
            <p className="text-tablet">
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
                width={10}
                height={10}
                className="mb-6 ml-2 translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
