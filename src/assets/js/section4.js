import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function section4() {
    gsap.registerPlugin(ScrollTrigger);
    const slider = document.querySelector(".site__inner");
    const slide = document.querySelector(".slide")
    const image = document.querySelector(".slider__image");
    const bounds = slide.getBoundingClientRect();

    // 이미지를 숨기는 함수
    const hideImage = () => {
        gsap.to(image, {
            autoAlpha: 0,
            onComplete: function () {
                image.classList.add("ir");
            }
        });
    };

    // 이미지를 보여주는 함수
    const showImage = (e) => {
        const imageSrc = e.target.querySelector("img")?.getAttribute("data-src");

        if (imageSrc) {
            image.src = imageSrc;

            const xMovement = Math.min(Math.max(parseInt(e.movementX), -20), 20);
            const yMovement = Math.min(Math.max(parseInt(e.movementY), -20), 20);

            const width = image.width;
            const height = image.height;
            const centerX = e.clientX - bounds.left - width / 2;
            const centerY = e.clientY - bounds.top - height / 2;

            gsap.to(image, {
                autoAlpha: 0.9,
                x: centerX,
                y: centerY,
                transformOrigin: "center",
                rotation: xMovement,
                skewX: xMovement,
                skewY: yMovement
            });
        } else {
            hideImage();
        }
    };

    // 마우스가 영역을 벗어났을 때 이미지를 숨기는 함수 호출
    slider.addEventListener("mouseleave", hideImage);

    // 마우스가 영역에 들어왔을 때 이미지를 보이게 하는 함수 호출
    slider.addEventListener("mouseenter", (e) => showImage(e));

    // 마우스 이동 시 이미지를 보여주는 함수 호출
    slider.addEventListener("mousemove", (e) => showImage(e));

    // 윈도우 리사이즈 이벤트를 통해 중앙 위치 다시 계산
    window.addEventListener("resize", () => {
        bounds = slider.getBoundingClientRect();
    });
}
