import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function section5() {
    // ScrollTrigger 플러그인 활성화
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray('.stack__front .text');

    textElements.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'center 80%',
                end: 'center 20%',
                scrub: true,
            },
        });
    });

    const textElements2 = gsap.utils.toArray('.stack__back .text');

    textElements2.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'center center%',
                end: 'center 20%',
                scrub: true,
            },
        });
    });

    gsap.utils.toArray('.stack__front .text').forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 75%', // 나타날 시작 지점
                end: 'bottom 25%', // 나타날 끝 지점
                scrub: 1,
                // markers: true,
            },
        });
    });

    gsap.utils.toArray('.stack__back .text').forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 75%', // 나타날 시작 지점
                end: 'bottom 25%', // 나타날 끝 지점
                scrub: 1,
                // markers: true,
            },
        });
    });
}

// https://codepen.io/Juxtopposed/pen/mdQaNbG
