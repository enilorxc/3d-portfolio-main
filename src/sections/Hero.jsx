import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      ".hero-text h1",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.9 }
    )
      .fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(
        ".hero-cta",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.15"
      );
  });

  return (
    <section id="hero" className="relative overflow-hidden pb-0 mb-0">
      <div className="absolute top-0 left-0 z-10 pointer-events-none select-none">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-6 md:gap-7">
            {/* Headline */}
            <div className="hero-text leading-[0.95]">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  hi,
                </span>
              </h1>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(255,255,255,0.12)]">
                  i&apos;m Caroline
                </span>
                <span className="sr-only">, a developer</span>
              </h1>
            </div>

            {/* Subheadline (humorous + tasteful) */}
            <p className="hero-sub text-white-50 md:text-xl max-w-2xl">
              Shaping bugs into features — one commit at a time. ✨
            </p>

            {/* CTA */}
            <div className="hero-cta flex items-center gap-4">
              <Button
                text="Projects"
                className="md:w-80 md:h-16 w-60 h-12"
                targetId="work"
              />
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-sm hover:bg-white/10 transition"
                aria-label="Contact Caroline"
              >
                <span className="text-white/90">Let’s talk</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-80"
                >
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
