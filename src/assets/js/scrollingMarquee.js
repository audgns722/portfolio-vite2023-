function Marquee(selector, speed, reverse) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    parentSelector.innerHTML += clone;

    if (reverse) parentSelector.classList.add('reverse');

    let i = 0;

    function animate() {
        const firstElement = parentSelector.firstElementChild;

        if (reverse) {
            firstElement.style.marginRight = `-${i}px`;
        } else {
            firstElement.style.marginLeft = `-${i}px`;
        }

        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i += speed;

        requestAnimationFrame(animate);
    }

    animate();
}

window.addEventListener('load', function () {
    for (let i = 0; i < 2; i++) {
        Marquee('.marquee2', 1, false);
        Marquee('.marquee1', 1, true);
        Marquee('.marquee4', 1, false);
        Marquee('.marquee3', 1, true);
    }
});
