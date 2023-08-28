const headerBtns = document.querySelector(".header-btns"),
  navMenu = document.querySelector(".navigation-menu"),
  navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", (e) => {
  e.preventDefault();

  const visibility = navMenu.getAttribute("data-visible", false);
  console.log(visibility);
  const buttons = navMenu.getAttribute("data-visible", false);
  console.log(buttons);

  if (visibility === "false") {
    navMenu.setAttribute("data-visible", true);
    headerBtns.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navMenu.setAttribute("data-visible", false);
    headerBtns.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
