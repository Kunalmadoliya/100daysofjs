const nav_links = document.querySelectorAll(".list-items");
const burger = document.querySelector(".burger");


function underlineLink(elem) {
  const underline = document.getElementById("underline");
  underline.style.left = `${elem.offsetLeft}px`;
  underline.style.width = `${elem.offsetWidth}px`;
}


nav_links.forEach((nav_link) => {
    nav_link.addEventListener("click", (e) => {
      nav_links.forEach((link) => link.classList.remove("active"));
      e.target.classList.add("active");
      underlineLink(e.target);
    });
  });

  