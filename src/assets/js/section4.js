import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function section4() {
    // GSAP을 사용하여 호버 효과를 정의
    const image = document.querySelector('.site__image');

    // 마우스 호버 효과
    image.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.1 });
    });

    // 마우스 떠남 효과
    image.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1 });
    });
}