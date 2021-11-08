const menu = document.querySelector(".menu");
const menuSection = menu.querySelector(".menu-section");
const menuArrow = menu.querySelector(".menu-mobile-arrow");
const menuClosed = menu.querySelector(".menu-mobile-close");
const menuTrigger = document.querySelector(".menu-mobile-trigger");
const menuOverlay = document.querySelector(".overlay");
let subMenu;

menuSection.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});

menuArrow.addEventListener("click", () => {
  hideSubMenu();
});

menuTrigger.addEventListener("click", () => {
  toggleMenu();
});

menuClosed.addEventListener("click", () => {
  toggleMenu();
});

menuOverlay.addEventListener("click", () => {
  toggleMenu();
});

// Show & Hide Toggle Menu Function
function toggleMenu() {
  menu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
}

// Show the Mobile Side Menu Function
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".menu-subs");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".menu-mobile-title").innerHTML = menuTitle;
  menu.querySelector(".menu-mobile-header").classList.add("active");
}

// Hide the Mobile Side Menu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);

  menu.querySelector(".menu-mobile-title").innerHTML = "";
  menu.querySelector(".menu-mobile-header").classList.remove("active");
}

// Windows Screen Resizes Function
window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};

//--------------------------------------------------------
//Start:Main Slider Section
var slideShowe = document.querySelector(".slideshow").children;
var nextSlides = document.querySelector(".next-slide");
var preSlides = document.querySelector(".pre-slide");
var totalslide = slideShowe.length;
var indexer = 0;

nextSlides.onclick = function (){
  showItem("next");
}

preSlides.onclick = function (){
  showItem("pre");
}

setInterval(showItem , 8000);

function showItem(direction){

  if (direction == "next") {
    indexer++;
    if (indexer == totalslide) {
      indexer = 0;
    }
  }else{
    if (indexer == 0) {
      indexer = totalslide - 1;
    }
    else{
      indexer--;
    }
  }

  for (let i = 0; i < totalslide; i++) {
    slideShowe[i].classList.remove("active");
  }
  slideShowe[indexer].classList.add("active");

}

// -- END --
//-----------------------------------
//Start:Slider For Top Products

var topslideItem = document.querySelector(".topslide").children;
var leftButton = document.getElementById("click");
var rightButton = document.getElementById("click2");

var totalSlide = topslideItem.length;
var indexer = 0;

rightButton.onclick = function (){
  showProduct("next");
}

leftButton.onclick = function (){
  showProduct("pre");
}

setInterval(showProduct , 8000);

function showProduct(direction){
  if (direction == "next") {
    indexer++;
    if (indexer == totalSlide) {
      indexer = 0;
    }
  }else{
    if (indexer == 0) {
      indexer = totalSlide -1;
    }
    else{
      indexer--;
    }
  }

  for (let i = 0; i < totalSlide; i++) {
    topslideItem[i].classList.remove("active");
  }
  topslideItem[indexer].classList.add("active");
}

//---End---
//--------------------------------------------------------
// Section : Hair Care
var slide = document.querySelector(".slide-items").children;
var nextSlide = document.querySelector(".right-slide");
var preSlide = document.querySelector(".left-slide");
var totalSlides = slide.length;
var index = 0;

nextSlide.onclick = function () {
  next("next");
};
preSlide.onclick = function () {
  next("pre");
};
setInterval(next, 8000);
function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < totalSlides; i++) {
    slide[i].classList.remove("active");
  }
  slide[index].classList.add("active");
}
// -- END --
//--------------------------------------------------------
function showPassword() {
  let passinput = document.querySelector("#passInput").type;
  if (passinput === "password") {
    document.querySelector("#passInput").type = "text";
  } else {
    document.querySelector("#passInput").type = "password";
  }
}

function showRePassword() {
  let repassinput = document.querySelector("#repassInput").type;
  if (repassinput === "password") {
    document.querySelector("#repassInput").type = "text";
  } else {
    document.querySelector("#repassInput").type = "password";
  }
}

function openInput() {
  let input = document.querySelector("#input-avatar");
  input.click();
}


//---- Image Zoom Script -----

