let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 370;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animation");
    } else {
      sec.classList.remove("show-animation");
    }
  });
};
