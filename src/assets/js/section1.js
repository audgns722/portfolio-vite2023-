import gsap from 'gsap';

export function section1() {
    const initialAnimation = {
        scaleY: 10,
        transformOrigin: '50% 100%',
    };

    const commonAnimationProps = {
        opacity: 1,
        scaleY: 1,
        duration: 1,
        ease: 'back.inOut(1)',
        delay: 1,
    };

    // 첫 번째 자식에 대한 애니메이션
    gsap.fromTo(
        '.main__text>div:first-child',
        { ...initialAnimation },
        { ...commonAnimationProps, onComplete: animateSecondChild },
    );

    // 두 번째 자식에 대한 애니메이션
    function animateSecondChild() {
        gsap.fromTo(
            '.main__text>div:nth-child(2)',
            { ...initialAnimation },
            { ...commonAnimationProps, delay: 0, onComplete: animateLastChild },
        );
    }

    function canvas() {
        // canvas
        gsap.fromTo('#webgl-canvas', { x: -50, y: -50, opacity: 0, scale: 0 }, { x: 0, y: 0, opacity: 1, scale: 1 });
    }

    // 마지막 자식에 대한 애니메이션
    function animateLastChild() {
        gsap.to('.main__text>span', {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            rotate: '-15deg',
            onComplete: animateMarquees
        });
    }

    // marquee 애니메이션
    function animateMarquees() {
        // GSAP 타임라인 생성
        const tl = gsap.timeline();

        // 타임라인에 애니메이션
        tl.fromTo('.marquee__wrap.mq1', { opacity: 0, y: 50, duration: 1.5, scaleY: 0 }, { opacity: 1, y: 0, scaleY: 1, ease: "expo" })
            .fromTo('.marquee__wrap.mq2', { opacity: 0, y: -50, duration: 1.5, scaleY: 0 }, { opacity: 1, y: 0, scaleY: 1, ease: "expo" })

        return tl;
    }
}
