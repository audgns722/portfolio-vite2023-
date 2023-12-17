export function marquee(selector, speed, reverse) {
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


