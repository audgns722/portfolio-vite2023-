import gsap from "gsap";

export function section1() {
    // scaleY를 10으로 하고 translateY를 -2000으로 설정하는 애니메이션
    gsap.fromTo(".big__text>div", {
        scaleY: 10,
        translateY: -2000,
        transformOrigin: "50% 100%", // transform-origin을 변경 (가운데 아래)
    }, {
        scaleY: 3,
        translateY: 0,
        ease: "expo.out",
        duration: 1,
    });

    gsap.fromTo(".big__text>div", {
        scaleY: 3,
        transformOrigin: "50% 100%", // transform-origin을 변경 (가운데 아래)
    }, {
        scaleY: 1,
        duration: 1,
        ease: "back.inOut(1)",
        delay: 1,
        onComplete: () => {
            // 첫 번째 Tween이 완료되면 실행될 코드
            gsap.to(".big__text>div>span", {
                opacity: 1,
                rotation: -25,
                duration: 0.3,
                ease: "power1.inOut",
                delay: 1,
                onComplete: () => {
                    // 두 번째 Tween이 완료되면 실행될 코드
                    gsap.to("#header", {
                        opacity: 1,
                        duration: 0.3,
                    });
                    gsap.fromTo(".marquee", {
                        translateY: -50
                    }, {
                        translateY: 0,
                        opacity: 1,
                        duration: 0.5,
                    });
                },
            });
        },
    });

    gsap.to(".big__text", {
        y: -50, // 헤더를 아래로 이동 (스크롤을 올릴 때)
        ease: "expoScale(0.5,7,none)", // sine.out 등 적절한 이징 함수 선택
        scrollTrigger: {
            trigger: "#section1",
            start: 'top top',
            end: 'bottom bottom',
            scrub: 3,
            duration: 0.5,
        },
    });
    gsap.to(".big__text>div>span", {
        scale: 1.1,
        ease: "expoScale(0.5,7,none)", // sine.out 등 적절한 이징 함수 선택
        scrollTrigger: {
            trigger: "#section1",
            start: 'top top',
            end: 'bottom bottom',
            scrub: 3,
            duration: 2,
        },
    });
}
