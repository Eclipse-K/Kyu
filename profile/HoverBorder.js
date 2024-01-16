document.addEventListener("DOMContentLoaded", function () {
  let currentContainer = null;

  const BorderContainers = document.querySelectorAll(
    ".container-about-wrapper, .container-skill-wrapper, .container-archive-wrapper, .container-project-wrapper, .container-career-wrapper"
  );

  BorderContainers.forEach((borderContainer) => {
    borderContainer.addEventListener("mouseover", function () {
      // 이전에 마우스 오버된 요소가 있으면 초기 색상으로 변경
      if (currentContainer !== null) {
        currentContainer.style.borderColor = "transparent"; // 초기 색상으로 변경, 원하는 색상으로 변경 가능
      }

      // 현재 마우스 오버된 요소의 border 색상을 변경
      borderContainer.style.borderColor = "white"; // 예시로 파란색 사용, 원하는 색상으로 변경 가능

      // 현재 마우스 오버된 요소를 추적
      currentContainer = borderContainer;
    });

    borderContainer.addEventListener("mouseout", function () {
      // 마우스가 요소에서 벗어났을 때 초기 border 색상으로 변경
      borderContainer.style.borderColor = "transparent"; // 초기 색상으로 변경, 원하는 색상으로 변경 가능
    });
  });
});
