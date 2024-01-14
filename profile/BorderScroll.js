const elements = document.querySelectorAll(
  ".container-about-wrapper, .container-skill-wrapper, .container-archive-wrapper, .container-project-wrapper, .container-career-wrapper"
);
let currentIndex = 0;

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  // 현재 인덱스 계산
  const newIndex = Math.floor(scrollPosition / innerHeight);

  // 현재 인덱스가 변경되었을 때
  if (newIndex !== currentIndex) {
    // 이전 인덱스의 border 효과 해제
    elements[currentIndex].classList.remove("scrolled");

    // 현재 인덱스로 업데이트
    currentIndex = newIndex;

    // 현재 인덱스에 border 효과 추가
    elements[currentIndex].classList.add("scrolled");
  }
};

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", handleScroll);

// 스크롤 이벤트 해제
window.addEventListener("beforeunload", () => {
  window.removeEventListener("scroll", handleScroll);
});
