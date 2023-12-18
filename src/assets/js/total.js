import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function total() {
    // 배경색 효과
    gsap.utils.toArray('.changeBg').forEach(item => {
        let color = item.getAttribute('data-bgcolor');

        ScrollTrigger.create({
            trigger: item,
            start: 'top center',
            end: 'bottom 5%',
            onEnter: () =>
                gsap.to('.changeBg', {
                    backgroundColor: color,
                    duration: 1.4,
                }),
            onEnterBack: () =>
                gsap.to('.changeBg', {
                    backgroundColor: color,
                    duration: 1.4,
                }),
        });
    });

    gsap.utils.toArray('.scroll__down>span>em').forEach(element => {
        gsap.to(element, {
            scale: 2,
            filter: 'hue-rotate(10deg)', // 추가된 부분
            rotate: '90deg',
            ease: 'epxo.in',
            mixBlendMode: 'exclusion',
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 25%',
                end: 'bottom bottom',
                scrub: true,
                markers: true,
            },
        });
    });
}
