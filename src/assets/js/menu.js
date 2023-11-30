export default {
    data() {
        return {
            scrollPosition: 0,
        };
    },
    mounted() {
        // 스크롤 이벤트 추가
        window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY;

            // 스크롤 위치에 따라 가시성 조절
            if (this.scrollPosition > 0) {
                // 스크롤이 발생하면 데스크톱 네비게이션 숨김, 모바일 네비게이션 표시
                this.$refs.headerNav.style.display = "none";
                this.$refs.headerNavMob.style.display = "block";
            } else {
                // 맨 위로 스크롤하면 데스크톱 네비게이션 표시, 모바일 네비게이션 숨김
                this.$refs.headerNav.style.display = "block";
                this.$refs.headerNavMob.style.display = "none";
            }
        },
        toggleMobileNav() {
            // 모바일 네비게이션 토글 로직을 추가하세요
        },
    },
};