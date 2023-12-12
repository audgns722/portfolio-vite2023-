import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function section2() {
    gsap.registerPlugin(ScrollTrigger);

    // loading 
    // gsap.fromTo("#loading", { display: "block" }, { display: "none", delay: 10 })
    // gsap.fromTo("#main", { display: "none" }, { display: "block", delay: 10 })
    // gsap.fromTo("#loading .clouds", { opacity: 0, scale: 1.5 }, { opacity: 1, duration: 10, scale: 1 });
    // gsap.fromTo("#loading .quote span", { opacity: 1, y: 0 }, { duration: 1, opacity: 0, y: -100, delay: 5 });
    // document.addEventListener("DOMContentLoaded", function () {
    //     // Wait for the DOM to be fully loaded
    //     setTimeout(function () {
    //         // Hide the loading element
    //         document.getElementById("loading").style.display = "none";
    //         // Show the main content
    //         document.getElementById("main").style.display = "block";
    //         document.getElementById("header").style.display = "block";
    //     }, 3000); // 3000 milliseconds (3 seconds) delay
    // });
    // section1

    document.querySelectorAll(".split").forEach(desc => {
        let splitText = desc.innerText;
        let splitWrap = splitText.split('').join("</span><span aria-hidden='true'>");
        splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
        desc.innerHTML = splitWrap;
        desc.setAttribute("aria-label", splitText);
    })

    // canvas
    const canvas = document.getElementById("canvas-webgl");

    // section1
    gsap.fromTo(".main__text.t1 span", { y: 50, opacity: 0 }, { duration: 0.7, y: 0, stagger: 0.04, opacity: 1, ease: "expo.out" });
    gsap.fromTo(".main__text.t2 span", { y: 100, opacity: 0 }, { duration: 0.7, y: 0, stagger: 0.04, opacity: 1, ease: "expo.out", delay: 0.5 });
    gsap.fromTo(".intro__bottom", { y: -100, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: "expo.out", delay: 0.8 });
    gsap.fromTo(canvas, { opacity: 0 }, { duration: 2, scale: 1, opacity: 0.2, delay: 1.5, })


    // 이미지 요소 가져오기
    const img = document.querySelector('#section1 .intro__bottom img');

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', () => {
        // 스크롤 위치 계산
        const scrollY = window.scrollY;

        // 스크롤 위치에 따라 클래스 추가
        if (scrollY > 20) {
            img.classList.add('rotate');
        } else {
            img.classList.remove('rotate');
        }
    });

    // section1 svg 스크롤 deg
    gsap.to(".intro__bottom img", {
        scrollTrigger: {
            trigger: "#section1",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        deg: 0,
        duration: 1,
        marker: true,
    }, {
        // 스크롤이 진행되면서 이미지의 DEG값을 증가시킵니다.
        onUpdate: function () {
            gsap.set("#section1 .intro__bottom .svg", {
                deg: (this.progress % 360)
            });
        }
    });



    // section3
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

    // // GSAP 애니메이션 코드 
    // const btn = document.querySelector('.header__navmob .btn');
    // const text = document.querySelector('.header__navmob .text');

    // // 초기 상태 설정
    // gsap.set(popup, { display: 'none' });

    // // 버튼 클릭 시 애니메이션
    // btn.addEventListener('click', () => {
    //     if (popup.style.display === 'none') {
    //         // Store the current scroll position
    //         scrollPosition = window.scrollY;

    //         // Disable scrolling on the body
    //         body.classList.add('no-scroll');

    //         gsap.to(popup, { duration: 0.3, autoAlpha: 1, height: '100vh', display: 'block', ease: 'power4.ease' });
    //         text.textContent = 'Close';
    //     } else {
    //         // Enable scrolling on the body
    //         body.classList.remove('no-scroll');

    //         // Restore the scroll position
    //         window.scrollTo(0, scrollPosition);

    //         gsap.to(popup, { duration: 0.3, autoAlpha: 0, height: 0, display: 'none', ease: 'power4.ease' });
    //         text.textContent = 'Menu';
    //     }
    // });






    // section4 
    gsap.utils.toArray('#section4 .text').forEach((text, index) => {
        const textTween = gsap.from(text, {
            y: 250,
            opacity: 0,
            duration: 2.5, // 더 긴 애니메이션 지속 시간
            ease: "bounce.out", // 이징 함수 추가
            scrollTrigger: {
                trigger: '#section4',
                start: `top center+=${index * - 50}`, // 50%씩 차이
                end: `bottom bottom-=${index * 25}`,
                toggleActions: 'play none none none',
                scrub: 1,
                // markers: true
            },
            // delay: index * 0.5,
            // onComplete: () => {
            //     // 텍스트가 사라질 때의 애니메이션
            //     gsap.to(text, {
            //         opacity: 0,
            //         duration: 0.8, // 더 긴 애니메이션 지속 시간
            //         ease: 'Power1.easeInOut', // 이징 함수 추가
            //     });
            // },
        });

        gsap.to(text, {
            color: '#624B74',
            ease: "bounce.out", // 이징 함수 추가
            scrollTrigger: {
                trigger: '#section4',
                start: `top center+=${index * -100}`, // 50%씩 차이
                end: `bottom bottom-=${index * 25}`,
                scrub: 1,
                // markers: true
            },
            // onUpdate: () => {
            //     const progress = textTween.progress();
            //     const opacity = 1 - progress; // 1부터 시작하여 0으로 감소하도록 계산
            //     text.style.background = `linear-gradient(to right, rgba(50, 50, 50, ${opacity}) ${progress * 300}%, transparent ${progress * 300}%)`;
            // },
        });
    });


    // section5
    gsap.from(".content__wrap > .right", {
        scrollTrigger: {
            trigger: "#section5",
            start: "top center",
            end: "bottom center",
            scrub: 1
        },
        duration: 0.5,
        scale: 0.5, // 시작 시 크기를 0.5로 설정
        opacity: 0, // 시작 시 투명도를 0으로 설정
        ease: "power1.out",
        delay: 0.5,

        // 효과 변경
        scale: 1, // 크기를 1로 변경
    }, "-=0.5");


    document.addEventListener("DOMContentLoaded", function () {
        // GSAP 코드 여기에 추가
        gsap.to(".about__intro", {
            scrollTrigger: {
                trigger: "#section6",
                start: "top center",
                end: "bottom bottom",
                scrub: 1,
                markers: true,
            },
            opacity: 0,
            duration: 1
        });
    });

    // 

}

