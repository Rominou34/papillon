var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
// This path is FROM THE HTML file and not the JS one
link.href = '../src/css/soft.css';
link.media = 'all';
head.appendChild(link);

var popup = document.registerElement('soft-popup');

/*
* This function is the constructor to display <soft-popup> notifications
* param is an array that looks like this:
* param =
* ["alert-type" ( defaults are success, info, warning and alert ),
* "Header message" ( the message displayed in bold at the top ),
* "Message" ( the message displayed )]
*/
var softPopup = function(param) {
  // Creating the element
  var softpopup = new popup();
  // Adding the text inside the element
  softpopup.innerHTML = "<span>" + param[1] + "</span>"+
  "<div><p>" + param[2] + "</p></div>";
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
