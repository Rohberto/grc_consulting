"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useGsapAnimations = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Reveal Animation
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax Effect
      gsap.to(".parallax", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);
};
