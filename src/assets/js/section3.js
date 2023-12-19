import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function section3() {
    gsap.registerPlugin(ScrollTrigger);
    const horSection = gsap.utils.toArray('.project__item');

    gsap.to(horSection, {
        xPercent: -130 * (horSection.length + 2),
        ease: 'none',
        scrollTrigger: {
            trigger: '#section3',
            start: 'top top',
            end: '+=3000',
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });

    gsap.to(".backgroud__cont", {
        scale: 2.5,
        y: "-50%",
        ease: "expo.in",
        duration: 2,
        scrollTrigger: {
            trigger: '#section3',
            start: "top top",
            end: "+=3000",
            invalidateOnRefresh: true,
            anticipatePin: 1,
            markers: true
        }

    })
}
