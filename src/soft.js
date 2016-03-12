/*
* Soft CSS - The tweakable CSS framework
* Romain Arnaud - 2016
*/

var popup = document.registerElement('soft-popup');
var popupmask = document.registerElement('soft-popup-mask');
var progressbar = document.registerElement('soft-progress');


/*************** SOFT POPUP ***************/

/*
* This function is the constructor to display <soft-popup> notifications
* param is an array that looks like this:
* params:
* type = alert type ( defaults are success, info, warning and alert ),
* header = Header message ( the message displayed in bold at the top ),
* msg = Message ( the message displayed )
*/
var softPopup = function(type, header, msg) {
  // Creating the element and the mask
  var softpopupmask = new popupmask();
  var softpopup = new popup();

  // Getting the corresponding color
  var color = null;
  switch(type) {
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
    softpopup.innerHTML = "<span>" + header + "</span>"+
    "<div><p>" + msg + "</p></div><button class=\""+color+"\">Hide</button>";
  } else {
    softpopup.innerHTML = "<span>" + header + "</span>"+
    "<div><p>" + msg + "</p></div><button>Hide</button>";
  }

  try {
    softpopup.setAttribute("class", type);
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

/*************** SOFT PROGRESS BARS ***************/

/*
* Function used to create progress bars
* params:
* minV = minimum value
* maxV = maximum value
* prog = current progress
* type = boolean ( if 0, we display "currentValue/maxValue", if 1, we display
* "x %" )
*/
var softProgressBar = function(minV, maxV, elem) {
  this.minV = minV;
  this.maxV = maxV;
  var softprogress = new progressbar();
  softprogress.setAttribute("data-minv",this.minV);
  softprogress.setAttribute("data-maxv",this.maxV);
  softprogress.innerHTML = "<div></div>";
  softprogress.querySelector("div").style.width = 0 + "%";
  this.element = softprogress;
  elem.appendChild(softprogress);
}

softProgressBar.prototype.setProgress = function(prog) {
  var percent = Math.round(((prog-this.minV) / (this.maxV-this.minV))*100);
  this.element.querySelector("div").style.width = percent + "%";
}
