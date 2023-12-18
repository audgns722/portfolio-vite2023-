import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export function section2() {
    gsap.registerPlugin(ScrollTrigger);

    const targets = gsap.utils.toArray('.split');

    targets.forEach(target => {
        let splitClient = new SplitType(target, {type: 'lines, words, chars'});
        let lines = splitClient.lines;
        let words = splitClient.words;
        let chars = splitClient.chars;

        gsap.from(chars, {
            yPercent: 100,
            opacity: 0,
            rotation: gsap.utils.random(-30, 30), // Random rotation between -30 and 30 degrees
            scale: gsap.utils.random(0.5, 1.5), // Random scale between 0.5 and 1.5
            duration: gsap.utils.random(0.5, 1.5), // Random duration between 0.5 and 1.5 seconds
            stagger: 0.03,
            ease: 'power4.out', // Use a different easing function
            scrollTrigger: {
                trigger: target,
                start: 'top 80%', // Adjust the start position
                end: 'bottom 20%', // Adjust the end position
                markers: true,
            },
        });
    });
}
