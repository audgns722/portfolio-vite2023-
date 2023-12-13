// Marquee 커스텀 함수 : 파라미터는 (선택자, 속도, 방향전환 여부)
function Marquee(selector, speed, reverse) {
    const parentSelector = document.querySelector(selector); // 클래스명을 인자로 받은 매개변수
    const clone = parentSelector.innerHTML; // 해당 클래스 엘리먼트의 html 값을 clone으로 선언
    const firstElement = parentSelector.firstElementChild;
    let i = 0;
    // console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    if (reverse) parentSelector.classList.add('reverse');

    setInterval(function () {
        if (reverse) {
            firstElement.style.marginRight = `-${i}px`;
        } else {
            firstElement.style.marginLeft = `-${i}px`;
        }
        if (i > firstElement.clientWidth) {
            i = 0;
        }
        i += speed;
    }, 0);
}

// 윈도우 로드되면 해당 함수 실행
window.addEventListener('load', function () {
    Marquee('.marquee2', 0.4, false);
    Marquee('.marquee1', 0.4, true);
});
