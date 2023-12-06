import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function section2() {
    gsap.registerPlugin(ScrollTrigger);

    // section1
    const elements = document.querySelectorAll("#section1 > .intro__text > *");
    const body = document.body;

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

    gsap.to(".slide__text", {
        scrollTrigger: {
            trigger: "#section3",
            start: "top center",
            end: "bottom center",
            scrub: 1
        },
        duration: 1,
        x: "300px",
        ease: "power1.out",
        delay: 0.5,
    });

    gsap.to(".slide__text2", {
        scrollTrigger: {
            trigger: "#section3",
            start: "top 60%",    // 또는 "+=1"과 같이 이전 애니메이션이 시작된 후 1초 뒤에 시작하도록 설정할 수 있습니다.
            end: "bottom center",   // 이 애니메이션은 .slide__text2가 화면 중앙에 도달할 때 시작됩니다.
            scrub: 1
        },
        duration: 1,
        opacity: 1,
        delay: 2  // 이전 애니메이션이 완료된 후 2초 뒤에 시작
    });

    // 마우스효과
    const mouseCursor = document.querySelector(".mouse__cursor");
    const popup = document.getElementById('nav__popup');

    let scrollPosition;

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
        if (!popup.style.display || popup.style.display === 'none') {
            gsap.to(".mouse__cursor", {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.easeInOut",
            });
        }
    });


    // section4 
    gsap.utils.toArray('#section4 .text').forEach((text, index) => {
        const textTween = gsap.from(text, {
            y: 100,
            opacity: 0,
            duration: 0.8, // 더 긴 애니메이션 지속 시간
            ease: 'Power1.easeInOut', // 이징 함수 추가
            scrollTrigger: {
                trigger: '#section4',
                start: `top bottom+=${index * -100}`, // 50%씩 차이
                end: `bottom bottom-=${index * 25}`,
                toggleActions: 'play none none none',
                scrub: 0.5,
                markers: true
            },
            delay: index * 0.5,
            onComplete: () => {
                // 텍스트가 사라질 때의 애니메이션
                gsap.to(text, {
                    opacity: 0,
                    duration: 0.8, // 더 긴 애니메이션 지속 시간
                    ease: 'Power1.easeInOut', // 이징 함수 추가
                });
            },
        });

        gsap.to(text, {
            color: '#624B74',
            ease: 'Power1.easeInOut', // 이징 함수 추가
            scrollTrigger: {
                trigger: '#section4',
                start: `top bottom+=${index * -100}`, // 50%씩 차이
                end: `bottom bottom-=${index * 25}`,
                scrub: 0.5,
                markers: true
            },
            onUpdate: () => {
                const progress = textTween.progress();
                const opacity = 1 - progress; // 1부터 시작하여 0으로 감소하도록 계산
                text.style.background = `linear-gradient(to right, rgba(50, 50, 50, ${opacity}) ${progress * 300}%, transparent ${progress * 300}%)`;
            },
        });
    });


    // section6

    // nav show&hide
    // GSAP 애니메이션 코드
    const btn = document.querySelector('.header__navmob .btn');
    const text = document.querySelector('.header__navmob .text');

    // 초기 상태 설정
    // gsap.set(popup, { autoAlpha: 0, y: "50%", display: 'none' });

    // 버튼 클릭 시 애니메이션
    btn.addEventListener('click', () => {
        if (popup.style.display === 'none') {
            // Store the current scroll position
            scrollPosition = window.scrollY;

            // Disable scrolling on the body
            body.classList.add('no-scroll');

            gsap.to(popup, { duration: 0.2, autoAlpha: 1, y: "0%", height: '100vh', display: 'block', ease: 'power4.ease' });
            text.textContent = 'Close';
        } else {
            // Enable scrolling on the body
            body.classList.remove('no-scroll');

            // Restore the scroll position
            window.scrollTo(0, scrollPosition);

            gsap.to(popup, { duration: 0.1, autoAlpha: 0, y: "-50%", height: 0, display: 'none', ease: 'power4.ease' });
            text.textContent = 'Menu';
        }
    });
}

