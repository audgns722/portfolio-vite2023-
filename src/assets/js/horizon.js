import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function horizon() {
    gsap.registerPlugin(ScrollTrigger);

    // .horizon__wrap 요소와 .horizon 요소들을 변수에 할당
    const horizontal = document.querySelector(".horizon__wrap");
    const horSection = gsap.utils.toArray(".horizon__wrap > .horizon");
    const horSection2 = gsap.utils.toArray(".sections");
    const section5Animations = gsap.utils.toArray("#section5 .sections");


    // 첫 번째 섹션에 대한 가로 스크롤 애니메이션 정의
    const scrollTween = gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#section2",
            start: "top top",
            end: () => "+=" + (horizontal.offsetWidth - innerWidth),
            pin: true,
            scrub: 1,
            // snap: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });


    // 이미지 애니메이션을 만들기 위한 함수 정의
    const createImageAnimation = (trigger, containerAnimation, id, offsetY, offsetX, duration, scale, ease, customStart, customEnd) => {
        gsap.fromTo(
            trigger,
            {
                opacity: 0,
                scale: 0.8,
                y: offsetY,
                x: offsetX, // 새로운 속성: x 좌표
            },
            {
                opacity: 1,
                y: 0,
                x: 0, // 새로운 속성: x 좌표를 0으로 변경
                duration: duration,
                scale: scale,
                ease: ease,
                scrollTrigger: {
                    trigger,
                    containerAnimation,
                    start: customStart || "left 50%",  // customStart 값이 없으면 기본값 사용
                    end: customEnd || "right 50%",    // customEnd 값이 없으면 기본값 사용
                    toggleActions: "play none reverse none",
                    markers: true,
                    id,
                },
            }
        );
    };

    // 이미지 애니메이션 함수 호출하여 각 이미지에 대한 애니메이션 설정
    createImageAnimation(".horizon.s1 > .container > .right img", scrollTween, "img1", 0, 0, 1.5, 1, "expo.in", "left 50%", "right 70%");
    createImageAnimation(".horizon.s2 > .container > .right img", scrollTween, "img2", 0, 50, 1.5, 1, "expo.in", "left 90%", "right 100%");
    createImageAnimation(".horizon.s3 > .container > .right img", scrollTween, "img3", 0, 50, 1.5, 1, "expo.in", "left 90%", "right 100%");
    createImageAnimation(".horizon.s4 > .container > .right img", scrollTween, "img4", 0, 50, 1.5, 1, "expo.in", "left 90%", "right 100%");
    createImageAnimation(".horizon.s5 > .container > .right img", scrollTween, "img5", 0, 50, 1.5, 1, "expo.in", "left 90%", "right 100%");


    // progress
    gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: {
            scrub: 0.3,
            trigger: "#section2",
            start: "top top",
            end: () => "+=" + (horizontal.offsetWidth - innerWidth),
        }
    })


    // 두 번째 섹션에 대한 추가적인 애니메이션 (필요시)
    gsap.to(horSection2, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: "#section5",
            start: "top top",
            end: "200%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}