function toggleNavbar() {
  var navbar = document.getElementById("navbarNav");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
}
document.getElementById("toggleButton").addEventListener("click", toggleNavbar);
var navbarLinks = document.querySelectorAll("#navbarNav a");
navbarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Close the navbar when a link is clicked
    var navbar = document.getElementById("navbarNav");
    navbar.style.display = "none";
  });
});
