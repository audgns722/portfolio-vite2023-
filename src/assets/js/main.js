import {smooth} from './smooth.js';
import {section3} from './section3.js';
import {section4} from './section4.js';
import {section1} from './section1.js';
import {section2} from './section2.js';
import {section5} from './section5.js';
import {marquee} from './marquee.js';
import {total} from './total.js';
import {section6} from './section6.js';
import {canvas} from './canvas.js';

window.addEventListener('load', function () {
    smooth();
    section1();
    section2();
    section3();
    section4();
    section5();
    total();
    canvas();
    section6();
});
window.addEventListener('load', function () {
    for (let i = 0; i < 2; i++) {
        marquee('.marquee2', 1, false);
        marquee('.marquee1', 1, true);
        marquee('.marquee4', 1, false);
        marquee('.marquee3', 1, true);
    }
});
