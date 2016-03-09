var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = '../src/css/soft.css';
link.media = 'all';
head.appendChild(link);

var popup = document.registerElement('soft-popup');

var softPopup = function(param) {
  // Creating the element
  var softpopup = new popup();
  // Adding the text inside the element
  softpopup.innerHTML = "<span>" + param[1] + "</span>" + param[2];
  try {
    softpopup.setAttribute(param[0], "");
  } catch(err) {
    console.log(err.message);
  }
  // To hide the element on click
  softpopup.addEventListener("click", function() {
    this.remove();
  });
  document.body.appendChild(softpopup);
}
