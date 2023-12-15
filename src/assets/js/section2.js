import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function section2() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".intro__about", {
        opacity: 0,
        transformOrigin: "50% 100%", // transform-origin을 변경 (가운데 아래)
    }, {
        opacity: 1,
        scaleY: 1,
        duration: 1,
        ease: "back.inOut(1)",
        delay: 1,
    });
}

