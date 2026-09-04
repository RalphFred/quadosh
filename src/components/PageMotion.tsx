import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PageMotion() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('[data-motion-image]').forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.86, opacity: 0.52, filter: 'brightness(0.86)' },
          {
            scale: 1,
            opacity: 1,
            filter: 'brightness(1)',
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top bottom',
              end: 'center center',
              scrub: true,
            },
          },
        );

        gsap.to(image, {
          opacity: 0.28,
          filter: 'brightness(0.68)',
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'center 22%',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      const reveal = document.querySelector('[data-scrub-copy]');
      const words = reveal?.querySelectorAll('span');

      if (reveal && words?.length) {
        gsap.fromTo(
          words,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: reveal,
              start: 'top 82%',
              end: 'bottom 52%',
              scrub: true,
            },
          },
        );
      }
    });

    return () => media.revert();
  });

  return null;
}
