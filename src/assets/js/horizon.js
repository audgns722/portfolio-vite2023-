import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function horizon() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".horizon");

    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#horizon",
            start: "top top",
            end: "+=9600",
            pin: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        }
    });
}
