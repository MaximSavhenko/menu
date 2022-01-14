// js for burger
function burger() {
  let btnMenu = document.querySelector(".header__btn-menu"),
    burger = document.querySelector(".primary-menu-wrapper");
  // navbar = header.querySelector(".navbar-mobile");

  btnMenu.onclick = function () {
    document.body.classList.toggle("overflow");
    btnMenu.classList.toggle("open");
    burger.classList.toggle("open");
  };
}

burger();
