import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function project() {
  gsap.registerPlugin(ScrollTrigger);
  const horSection = gsap.utils.toArray(".project__item");

  gsap.to(horSection, {
    xPercent: -100 * horSection.length,
    ease: "none",
    scrollTrigger: {
      y: 0,
      trigger: "#section3",
      start: "top 50",
      end: "+=3000",
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });


  // // scaleY를 10으로 하고 translateY를 -2000으로 설정하는 애니메이션
  // gsap.fromTo(".big__text>div", {
  //   scaleY: 10,
  //   translate: -2000,
  // }, {
  //   scaleY: 3,
  //   translateY: 0,
  //   ease: "expo.out",
  //   duration: 1,
  // });

  // // scaleY를 1로 조절하는 애니메이션
  // gsap.fromTo(".big__text>div", {
  //   scaleY: 3,
  // }, {
  //   scaleY: 1,
  //   duration: 1,
  //   ease: "back.inOut(1)",
  //   delay: 1, // 딜레이를 1초 설정
  //   onComplete: () => {
  //     // 애니메이션이 완료된 후에 실행되는 함수
  //     gsap.to(".big__text>div>span", {
  //       opacity: 1,
  //       rotation: -25, // 회전 각도를 설정 (예: 360도)
  //       duration: 0.3, // 애니메이션 지속 시간
  //       ease: "power1.inOut", // 이징 함수 설정
  //     });
  //   },
  // });

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

  // scaleY를 1로 조절하는 애니메이션
  gsap.fromTo(".big__text>div", {
    scaleY: 3,
    transformOrigin: "50% 100%", // transform-origin을 변경 (가운데 아래)
  }, {
    scaleY: 1,
    duration: 1,
    ease: "back.inOut(1)",
    delay: 1,
    onComplete: () => {
      gsap.to(".big__text>div>span", {
        opacity: 1,
        rotation: -25,
        duration: 0.3,
        ease: "power1.inOut",
      });
    },
  });
}
