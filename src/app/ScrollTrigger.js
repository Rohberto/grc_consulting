"use client";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);

export default function Layout({children}) {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); 
      });

      return <>{children}</>
}