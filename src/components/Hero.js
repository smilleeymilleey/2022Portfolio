import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";
import { FRONT_PAGE_DESC, FRONT_PAGE_NAME } from "../root.link";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="px-5 md:my-32 flex flex-row flex-wrap space-y-1 md:space-y-0 patterns items-center">
      <div className="flex items-stretch">
        <div className="mb-auto space-y-5 text-align: center flex items-stretch relative">
          <article className="py-6">
            <h1 className="text-5xl font-bold md:text-7xl z-1">
              Hello. I’m <br />
              {FRONT_PAGE_NAME}
            </h1>
            <p className="tracking-wide leading-relaxed">{FRONT_PAGE_DESC} </p>
          </article>
          <div
            className="container absolute py-6 top-20 right-full md:-top-3/4 sm:-right-full md:-right-3/4 lg:-top-3/4 lg:-right-full -z-1"
            ref={container}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
