document.getElementById("aboutTitle").addEventListener("click", function () {
  // h1 태그를 클릭할 때마다 클래스를 토글하여 그룹의 효과 발생
  document.getElementById("aboutGroup").classList.toggle("clicked");
  document.getElementById("about").classList.toggle("clicked");
});

document.getElementById("skillTitle").addEventListener("click", function () {
  document.getElementById("skillGroup").classList.toggle("clicked");
  document.getElementById("skill").classList.toggle("clicked");
});

document.getElementById("archiveTitle").addEventListener("click", function () {
  document.getElementById("archiveGroup").classList.toggle("clicked");
  document.getElementById("archive").classList.toggle("clicked");
});

document.getElementById("projectTitle").addEventListener("click", function () {
  document.getElementById("projectCafeGroup").classList.toggle("clicked");
});

document.getElementById("projectTitle").addEventListener("click", function () {
  document.getElementById("projectAniGroup").classList.toggle("clicked");
});

document.getElementById("careerTitle").addEventListener("click", function () {
  document.getElementById("careerGroupTimeline").classList.toggle("clicked");
});
