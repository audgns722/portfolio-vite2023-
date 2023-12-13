import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function project() {
  gsap.registerPlugin(ScrollTrigger);
  const horSection = gsap.utils.toArray(".project__item");

  gsap.to(horSection, {
    xPercent: -100 * horSection.length,
    ease: "none",
    scrollTrigger: {
      trigger: "#section3",
      start: "top 50",
      end: "+=3000",
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      markers: true,
    },
  });
}
