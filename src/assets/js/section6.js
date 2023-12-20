import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function section6() {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.getElementById('section6');
    const leftWrap = section.querySelector('.left__wrap');
    const rightWrap = section.querySelector('.right__wrap');
    const profileImg = section.querySelector('.profileimg');

    gsap.set([leftWrap, rightWrap, profileImg], { autoAlpha: 0 });

    // left__wrap 애니메이션
    gsap.fromTo(
        leftWrap,
        { xPercent: -100, autoAlpha: 0 },
        {
            xPercent: 0,
            autoAlpha: 1,
            ease: 'expo.in',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                scrubSpeed: 4,
            },
        },
    );

    // right__wrap 애니메이션
    gsap.fromTo(
        rightWrap,
        { xPercent: 100, autoAlpha: 0, scale: 0.7 },
        {
            xPercent: 0,
            autoAlpha: 1,
            scale: 1,
            ease: 'expo.in',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                scrubSpeed: 4,
            },
        },
    );

    // profileimg 애니메이션
    gsap.fromTo(
        profileImg,
        { xPercent: -100, autoAlpha: 0 },
        {
            xPercent: 0,
            autoAlpha: 1,
            ease: 'expo.in',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                scrubSpeed: 4,
            },
        },
    );

    gsap.fromTo(
        '.contact__me',
        { yPercent: 0, autoAlpha: 0 },
        {
            yPercent: 10,
            autoAlpha: 1,
            ease: 'expo.in',
            scrollTrigger: {
                trigger: 'section7',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                scrubSpeed: 4,
            },
        },
    );
}
