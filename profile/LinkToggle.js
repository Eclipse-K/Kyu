// 각 nav-link를 클릭하면 해당 섹션으로 스크롤링하는 함수
const scrollWithOffset = (element, offset) => {
  const rect = element.getBoundingClientRect();
  window.scrollTo({
    top: rect.top + window.scrollY - offset,
    behavior: "smooth",
  });
};

// 각 nav-link에 클릭 이벤트 리스너 추가
const navLinks = document.querySelectorAll(".nav-link");
const offset = 300; // 필요한 경우 스크롤 오프셋 값을 조정

const navbarTogglerButton = document.getElementById("navbarTogglerButton");
const navbarNav = document.getElementById("navbarNav");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      scrollWithOffset(targetElement, offset);
    }

    let isCollapsed = navbarNav.classList.contains("show");

    if (isCollapsed) {
      navbarNav.classList.remove("show");
    }
  });
});
