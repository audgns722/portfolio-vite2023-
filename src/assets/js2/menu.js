document.addEventListener('DOMContentLoaded', function() {
    var headerNav = document.querySelector('.header__nav');
    var headerNavMob = document.querySelector('.header__navmob');

    // 초기 상태에서 header__navmob에 hide 클래스 추가
    headerNavMob.classList.add('hide');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > 0) {
            // 스크롤이 발생하면 header__nav가 숨겨지고 header__navmob가 나타남
            headerNav.classList.add('hide');
            headerNavMob.classList.remove('hide');
        } else {
            // 맨 위로 스크롤하면 header__nav가 나타나고 header__navmob가 숨겨짐
            headerNav.classList.remove('hide');
            headerNavMob.classList.add('hide');
        }
    });
});
