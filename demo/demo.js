var classicTheme = document.getElementById("classic-theme");
var darkTheme = document.getElementById("dark-theme");
var flashyTheme = document.getElementById("flashy-theme");

classicTheme.addEventListener("click", function() {
  changeStylesheet("../src/min/papillon.min.css");
});

darkTheme.addEventListener("click", function() {
  changeStylesheet("../themes/papillon-dark.min.css");
});

flashyTheme.addEventListener("click", function() {
  changeStylesheet("../themes/papillon-flashy.min.css");
});
