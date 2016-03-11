/*
* Soft CSS - The tweakable CSS framework
* Romain Arnaud - 2016
*/

var popup = document.registerElement('soft-popup');
var popupmask = document.registerElement('soft-popup-mask');

/*
* This function is the constructor to display <soft-popup> notifications
* param is an array that looks like this:
* param =
* ["alert-type" ( defaults are success, info, warning and alert ),
* "Header message" ( the message displayed in bold at the top ),
* "Message" ( the message displayed )]
*/
var softPopup = function(param) {
  // Creating the element and the mask
  var softpopupmask = new popupmask();
  var softpopup = new popup();

  // Getting the corresponding color
  var color = null;
  switch(param[0]) {
    case "success":
      color = "green"; break;
    case "info":
      color = "blue"; break;
    case "warning":
      color = "yellow"; break;
    case "alert":
      color = "red"; break;
  }

  // Adding the text inside the element
  if(color != null) {
    softpopup.innerHTML = "<span>" + param[1] + "</span>"+
    "<div><p>" + param[2] + "</p></div><button class=\""+color+"\">Hide</button>";
  } else {
    softpopup.innerHTML = "<span>" + param[1] + "</span>"+
    "<div><p>" + param[2] + "</p></div><button>Hide</button>";
  }

  try {
    softpopup.setAttribute("class", param[0]);
  } catch(err) {
    console.log(err.message);
  }
  // To hide the element on click
  var button = softpopup.querySelector("button");
  button.addEventListener("click", function() {
    this.parentElement.parentElement.remove();
    this.parentElement.remove();
  });
  document.body.appendChild(softpopupmask);
  softpopupmask.appendChild(softpopup);
}
