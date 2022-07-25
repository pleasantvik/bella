const header = document.querySelector(".header");
const mainNav = document.querySelector(".nav__list");
const body = document.querySelector("body");

const toggleBtn = document.querySelector(".nav__btn-mobile");

// MOBILE NAVIGATION
toggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav__open");
});

const hero = document.querySelector(".hero");

const initialCoord = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
};
const heroObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${initialCoord}px`,
});

heroObs.observe(hero);

mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);

    document.querySelector(id).scrollIntoView({
      behaviour: "smooth",
    });

    header.classList.remove("nav__open");
  }
});
