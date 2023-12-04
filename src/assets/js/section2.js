import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function section2() {
    gsap.registerPlugin(ScrollTrigger);

    // 각 .horizon 요소에 대해 반복
    document.querySelectorAll('.horizon').forEach((horizon, index) => {
        const image = horizon.querySelector('.right img');

        gsap.from(image, {
            opacity: 0,
            y: 50,
            scale: 0.8, // 시작 시 작게 시작
            rotate: 45, // 시작 시 45도 회전
            ease: "power4.out", // 사용할 ease 함수
            duration: 1,
            scrollTrigger: {
                trigger: horizon,
                start: "top 20%",
                toggleActions: "play none none none",
            }
        });
    });

    const mouseCursor = document.querySelector(".mouse__cursor");

    gsap.to(mouseCursor, {
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none",
        },
        xPercent: -50, // Center the cursor horizontally
        yPercent: -50, // Center the cursor vertically
        ease: "power2.easeInOut",
    });

    window.addEventListener("mousemove", (e) => {
        gsap.to(".mouse__cursor", {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "power2.easeInOut",
        });
    });


    // section1
    const elements = document.querySelectorAll("#section1 > .intro__text > *");

    // 각 요소에 대한 GSAP 효과 설정
    elements.forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: -50, // 위쪽에서 아래쪽으로 이동하는 정도
            duration: 0.8,
            ease: "power4.out", // 애니메이션 이징 설정
            delay: index * 0.2, // 각 요소의 시작 지연 시간을 조정하여 순차적으로 나타나게 함
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    });
}
