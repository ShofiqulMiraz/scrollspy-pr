let menuSection = document.querySelectorAll("menu li");
let leftborder = document.querySelector(".border-left");

// for clickable event
menuSection.forEach((v) => {
  v.onclick = () => {
    setTimeout(() => {
      menuSection.forEach((j) => j.classList.remove("active"));
      v.classList.add("active");
    }, 300);
  };
});

// for window scrolldown event

window.onscroll = () => {
  let mainSection = document.querySelectorAll("main section");

  mainSection.forEach((v, i) => {
    let rect = v.getBoundingClientRect().y;
    if (rect < window.innerHeight - 200) {
      menuSection.forEach((v) => v.classList.remove("active"));
      menuSection[i].classList.add("active");
    }
  });

  let top = window.scrollY;
  if (top > 108) {
    leftborder.style.top = `${top / 3.1}px`;
  }
};
