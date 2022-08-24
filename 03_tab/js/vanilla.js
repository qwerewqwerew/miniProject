const tabContent = document.querySelectorAll("#tab-content>div");
const targetLink = document.querySelectorAll(".tab-menu a");

for (let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", (e) => {
    e.preventDefault();

    for (let j = 0; j < targetLink.length; j++) {
      targetLink[j].classList.remove("active");
      e.target.classList.add("active");
    }
    let orgTarget = e.target.getAttribute("href");
    console.log(orgTarget);
    for (let x = 0; x < tabContent.length; x++) {
      tabContent[x].style.display = "none";
    }
    document.querySelector(orgTarget).style.display = "block";
  });
  document.querySelector("#tabs-1").style.display = "block";
}
