window.addEventListener("scroll", onScroll)

function onScroll() {
  showNavOnScholl();
  backToTopButtonOnScroll();
}
onScroll();

function showNavOnScholl() {
  scrollY > 0
  ? navigation.classList.add("scroll")
  : navigation.classList.remove("scroll");
}

function backToTopButtonOnScroll() {
  scrollY > 40
    ? backToTopButton.classList.add("show")
    : backToTopButton.classList.remove("show");
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({ origin: "top", distance: "30px", duration: 1400 }).reveal(
  `
    #home, 
    #home img, 
    #home .stats, 
    #services, 
    #services header, 
    #services .card,
    #about,
    #about header,
    #about .content`
);
