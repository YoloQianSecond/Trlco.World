import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;

    // Split text into spans for each word
    const text = paragraph.innerText.trim(); // Trim whitespace
    const words = text.split(" ");
    paragraph.innerHTML = words
      .map((word) => `<span style="display: inline-block; transition: color 0.5s;">${word}</span>`)
      .join(" ");

    const wordSpans = paragraph.querySelectorAll("span");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraph,
        start: "top 80%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    tl.to(wordSpans, {
      color: "#17271F",
      stagger: {
        each: 0.1,
        from: "start",
        ease: "power1.inOut",
      },
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      <p
        className="text-[#FFEEED] text-center md:text-5xl text-[28px] md:leading-[72px] leading-[40px] font-bold"
        ref={paragraphRef}
      >
        We are the world's first 360 RWA ecosystem that drives the flywheel effect for both the consumer and investor when it comes to real estate living, tokenization, DeFi systems and utility rewards.
      </p>
    </div>
  );
};

export default TextAnimation;