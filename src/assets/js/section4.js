import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function section4() {
    const projectPreviews = document.querySelectorAll('.image-container');
    let throttleTimer;
    const onMouseMove = e => {
        if (!throttleTimer) {
            throttleTimer = setTimeout(() => {
                projectPreviews.forEach((projectPreview, index) => {
                    const rect = projectPreview.getBoundingClientRect();
                    const offsetX = e.clientX - rect.width / 2;
                    const offsetY = e.clientY - rect.height / 2;
                    projectPreview.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                });
                throttleTimer = null;
            }, 20);
        }
    };
    document.addEventListener('mousemove', onMouseMove);

    // 각 .site에 대한 이벤트 리스너 추가
    const siteElements = document.querySelectorAll('.site');
    siteElements.forEach(siteElement => {
        const imageElement = siteElement.querySelector('.image-container img'); // 현재 .site 요소 내부의 이미지 요소 선택
        const hoverAnimation = gsap.timeline({
            paused: true, // 초기에 애니메이션을 일시 중지
        });

        hoverAnimation.fromTo(
            imageElement,
            {
                x: '50%', // 초기에 이미지를 오른쪽으로 이동시켜 보이지 않도록 설정
                opacity: 0, // 초기에 이미지를 투명하게 설정
            },
            {
                x: 0, // 이미지를 원래 위치로 이동하여 보이도록 설정
                opacity: 1, // 이미지를 불투명하게 설정
                ease: 'expo', // 자연스럽고 부드러운 효과를 위한 easing 설정
                duration: 1, // 이미지 이동 및 페이드 애니메이션 지속 시간 설정
            },
        );

        // 마우스 호버 이벤트 리스너 추가
        siteElement.addEventListener('mouseenter', () => {
            hoverAnimation.play(); // 애니메이션 재생
        });

        // 마우스 아웃 이벤트 리스너 추가
        siteElement.addEventListener('mouseleave', () => {
            hoverAnimation.reverse(); // 애니메이션을 역으로 재생하여 초기 상태로 돌아감
        });
    });

    // 이벤트 리스너 해제 함수 반환
    return () => {
        document.removeEventListener('mousemove', onMouseMove);
    };
}
