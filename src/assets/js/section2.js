import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function section2() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.horizon').forEach((horizon, index) => {
        const image = horizon.querySelector('.right img');
    
        gsap.from([horizon, image], {
          opacity: 0,
          x: 200 * (index + 1),
          scale: 0.8,
          rotate: 45,
          ease: "power4.out",
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: '.horizon',
            start: "top center",
            scrub: true,
          },
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

    // section4 
    gsap.utils.toArray('#section4 .text').forEach((text, index) => {
        gsap.from(text, {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '#section4',
            start: 'top center+=100',
            end: 'bottom center-=100',
            toggleActions: 'play none none none',
          },
          delay: index * 0.5, // 순차적으로 보여주기 위한 딜레이
        });
      });
    }

