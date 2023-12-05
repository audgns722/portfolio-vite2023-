import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function horizon() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray(".horizon__wrap > .horizon");
    const horSection2 = gsap.utils.toArray(".sections");
    const horizontal = document.querySelector(".horizon__wrap");


    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#section2",
            start: "top top",
            end: () => "+=" + (horizontal.offsetWidth - innerWidth),
            pin: true,
            scrub: 0.5,
            snap: 1 / (horSection.length - 1),
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
            end: "200%",
            pin: true,
            scrub: 1,
            snap: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        }
    });
}
