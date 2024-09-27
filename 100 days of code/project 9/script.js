const tab_btns = document.querySelectorAll("[data-target-tab]");
const tab_contents = document.querySelectorAll(".registration-form .content");
const buttons = document.querySelectorAll('.btn')

tab_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tab_btns.forEach((btn) => btn.classList.remove("active"));
    tab_contents.forEach((btn) => btn.classList.remove("active"));
    buttons.forEach((btn) => btn.classList.remove('active'))
 
    btn.classList.toggle("active");
    document.querySelector(btn.dataset.targetTab).classList.add("active");
  });
});