import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function section1() {
    gsap.registerPlugin(ScrollTrigger);

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
        {...initialAnimation},
        {...commonAnimationProps, onComplete: animateSecondChild},
    );

    // 두 번째 자식에 대한 애니메이션
    function animateSecondChild() {
        gsap.fromTo(
            '.main__text>div:nth-child(2)',
            {...initialAnimation},
            {...commonAnimationProps, delay: 0, onComplete: animateLastChild},
        );
    }

    // 마지막 자식에 대한 애니메이션
    function animateLastChild() {
        gsap.to('.main__text>span', {
            opacity: 1,
            delay: 1,
            rotate: '-15deg',
        });
    }
}
