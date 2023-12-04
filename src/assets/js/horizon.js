import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function horizon() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".horizon");
    const horSection2 = gsap.utils.toArray(".sections");

    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#horizon",
            start: "top top",
            end: "+=9600",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        }
    });

    gsap.to(horSection2, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: "#section5",
            start: "top top",
            end: "+=3840",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        }
    });
}
