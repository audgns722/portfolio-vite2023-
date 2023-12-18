import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function section5() {
    // ScrollTrigger 플러그인 활성화
    gsap.registerPlugin(ScrollTrigger);

    // 이미지 요소 선택
    const imageElements = document.querySelectorAll('.image__wrap img');

    // 이미지 요소에 대한 애니메이션 설정
    imageElements.forEach((imageElement, index) => {
        gsap.to(imageElement, {
            x: -500, // 초기 투명도 0으로 설정하여 페이드인 효과
            scale: 1.2, // 초기 크기 0.5로 설정하여 축소 효과
            ease: 'epxo in', // 휠 액션에 따라 자연스럽게 이동하기 위한 easing 설정
            duration: 1,
            scrollTrigger: {
                trigger: '#section5', // 트리거 요소
                start: 'top bottom', // 트리거 요소가 뷰포트 하단으로 이동할 때 애니메이션 시작
                end: 'bottom bottom', // 트리거 요소의 가로 크기의 2배까지 애니메이션 실행
                scrub: true, // 애니메이션에 따라 요소 위치 자동 조정
                markers: true,
            },
        });
    });
}

// https://codepen.io/Juxtopposed/pen/mdQaNbG