//media queries
const mediaWidthMd = window.matchMedia("(min-width: 768px)");

//toggle button
const toggleButton = document.getElementById("navToggle");
//navbar Links
const navLinks = document.querySelectorAll("#navLink");
//navbar links as a whole
const navLinksALL = document.getElementById("navLinks");
let toggleOpen = false;
//checks the width of the screen and shows/hides the toggle button accordingly
function checkNavWdith() {
  if (mediaWidthMd.matches) {
    //hide the toggle button
    toggleButton.style.opacity = "0";
    toggleButton.style.visibility = "hidden";
    //show the links
    navLinks.forEach((link) => {
      link.style.transition = "opacity 0.4s ease";
      link.style.opacity = "1";
      link.style.visiblity = "visible";
    });
    if (toggleOpen) {
      navLinksALL.style.flexDirection = "row";
      navLinksALL.style.alignItems = "center";
      navLinksALL.style.paddingBottom = "0.6em";
    }
  } else {
    //show the toggle
    toggleButton.style.opacity = "1";
    toggleButton.style.visibility = "visible";
    //hide the links
    navLinks.forEach((link) => {
      link.style.transition = "opacity 0.4s ease";
      link.style.opacity = "0";
      link.style.visiblity = "hidden";
    });
  }
}

//on document load we:
// *do an initial check of the screen width to hide/show toggle button
// *attach a listener to the mediaWithLg query to constantly call checkNavWidth
//  if the media width changes
document.addEventListener("DOMContentLoaded", function () {
  checkNavWdith();
  mediaWidthMd.onchange = (e) => {
    checkNavWdith();
  };
});

//toggles the opening of the menu
toggleButton.addEventListener("click", function () {
  if (toggleOpen) {
    navLinks.forEach((link) => {
      link.style.transition = "opacity 0s ease";
    });
    navLinksALL.style.flexDirection = "row";
    navLinksALL.style.alignItems = "center";
    navLinksALL.style.paddingBottom = "0.6em";
    navLinks.forEach((link) => {
      link.style.opacity = "0";
      link.style.visiblity = "Hidden";
    });
    toggleOpen = false;
  } else if (!toggleOpen) {
    navLinks.forEach((link) => {
      link.style.transition = "opacity 0.4s ease";
    });
    navLinksALL.style.flexDirection = "column";
    navLinksALL.style.alignItems = "flex-start";
    navLinksALL.style.paddingBottom = "2em";
    navLinks.forEach((link) => {
      link.style.opacity = "1";
      link.style.visiblity = "visible";
    });
    toggleOpen = true;
  }
});
