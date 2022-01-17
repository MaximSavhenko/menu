function burger() {
  let btnMenu = document.querySelector(".header__btn-menu"),
    burger = document.querySelector(".primary-menu-container");

  btnMenu.onclick = function () {
    btnMenu.classList.toggle("open");
    burger.classList.toggle("open");
  };
}

burger();

function subMenu() {
  let menuLink = document.getElementsByClassName("secondary-menu-link"),
      menu = document.getElementById("block-mainnavigationwithentertainmentguide-2");

  for (let i = 0; i < menuLink.length; i++) {
    if (menuLink[i].children.length == 1) {
      menuLink[i].classList.add("empty");
    }
  }
  menu.onmouseover = function (event) {
    let target = event.target;
    then = target.className == "secondary-menu-link";

    function closeMenu() {
      let subm = document.getElementsByClassName("secondary-submenu");
      if (menu) {
        for (let i = 0; i < subm.length; i++) {
          subm[i].classList.remove("open");
        }
      }
    }

    if (then) {
      let subMenu = target.getElementsByClassName("secondary-submenu");

      closeMenu();
      subMenu[0].classList.add("open");
    }
  };
}

subMenu();
