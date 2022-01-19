jQuery(function () {
  function burgerToggle() {
    let btnMenu = $(".toggleMenu"),
      burger = $(".mobile-menu");

    btnMenu.on('click' , function () {
        btnMenu.addClass("open");
        burger.addClass("open");
    })
  }

  burgerToggle();
  function menuSublinkAddClass() {
    let menu = $(".mobile-menu .mobile-menu__link"),
      menu_mobile = $("#mobile-menu__id");

    menu.each(function () {
      if (!$(this).children(".mobile-menu__submenu").length > 0) {
        $(this).addClass("empty");
      }
    });

    menu_mobile.on("click", function (event) {
      let target = $(event.target),
        then = target.hasClass("mobile-menu__link");

      function closeMenu() {
        let subm = $(".mobile-menu__submenu");
        if (menu_mobile) {
          subm.hide();
        }
      }

      if (then) {
        let subMenu = target.find(".mobile-menu__submenu");
        closeMenu();
        subMenu.each(function () {
          $(this).fadeIn(50);
        });
      }

      $(document).on("click", function (e) {
        let subm = $(".mobile-menu__submenu"),
            burger = $(".mobile-menu"),
            btnMenu = $(".toggleMenu")
        if (
          !menu.is(e.target) &&
          menu_mobile.has(e.target).length === 0 &&
          !subm.is(e.target) &&
          subm.has(e.target).length === 0 &&
          !btnMenu.is(e.target) &&
          btnMenu.has(e.target).length === 0
        ) {
          btnMenu.removeClass('open')
          burger.removeClass("open");
          closeMenu();
        }
      });
    });
  }

  menuSublinkAddClass();
});
