// js for burger
function burger() {  
  let btnMenu = document.querySelector(".header__btn-menu")
  // burger = document.querySelector(".burger"),
  // navbar = header.querySelector(".navbar-mobile");

  console.log(btnMenu)


  btnMenu.onclick = function () {
    document.body.classList.toggle("overflow");
    btnMenu.classList.toggle("open");
  };
}

burger();

// js for preloader

// function onload() {
//   let prealoader = document.querySelector(".preloader");
//   if (prealoader) {
//     document.body.onload = function () {
//       setTimeout(function () {
//         if (!prealoader.classList.contains("loaded_hiding")) {
//           prealoader.classList.add("loaded_hiding");
//         }
//       }, 5000);
//     };
//   }
// }

// onload();

// function scrollUp() {
//   function scrollTo(element) {
//     window.scroll({
//       left: 0,
//       top: element.offsetTop,
//       behavior: "smooth",
//     });
//   }

//   var button = document.querySelector(".footer__scrollUp");
//   var header = document.querySelector("#up");

//   button.addEventListener("click", () => {
//     scrollTo(header);
//   });
// }

// scrollUp();

// function filterFeedback() {
//   let block = document.querySelectorAll(".parsedHTML");
//   block.forEach((block) => {
//     let feedback = block.querySelector(".filter__card-feedback");
//     item = block.querySelectorAll(".parsedHTML > .filter__card-item");
//     closeBtn = block.querySelector(".filter__info-close-btn");


//     item.forEach((items) => {
//       items.onclick = function (e) {
//         feedback.classList.toggle("active");
//       };
//     });

//     closeBtn.onclick = function (e) {
//       feedback.classList.remove("active");
//     };
//   });
// }

// filterFeedback();
