/*
* Soft CSS - The tweakable CSS framework
* Romain Arnaud - 2016
*/

window.onload = function() {
  addToolTipListeners();
}


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
  var softpopupmask = document.createElement("div");
  softpopupmask.className = "soft-popupmask";

  var softpopup = document.createElement("div");
  softpopup.className = "soft-popup ";

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
    softpopup.className += type;
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
var softProgressBar = function(minV, maxV, elem, height) {
  this.minV = minV;
  this.maxV = maxV;
  var softprogress = document.createElement("div");
  softprogress.className = "soft-progress";
  softprogress.style.height = height + "px";

  softprogress.setAttribute("data-minv",this.minV);
  softprogress.setAttribute("data-maxv",this.maxV);
  softprogress.innerHTML = "<div></div>";
  softprogress.querySelector("div").style.width = 0 + "%";
  this.element = softprogress;
  elem.appendChild(softprogress);
}

softProgressBar.prototype.setProgress = function(prog) {
  var percent = Math.round(((prog-this.minV) / (this.maxV-this.minV))*100);
  if(percent > 100) { percent = 100; }
  this.element.querySelector("div").style.width = percent + "%";
}


/*************** SOFT TOOLTIPS ***************/


/*
* This function adds and event listener to all tooltips so they appear on
* hover
*/

var addToolTipListeners = function() {
  var toolTips = document.querySelectorAll(".soft-tooltip");
  toolTipItems = [].slice.call(toolTips);
  toolTipItems.forEach(function (item) {
    //Event listener for hover
    item.addEventListener("mouseover", function() {
      var tips = item.querySelectorAll(".tooltip");
      tipItems = [].slice.call(tips);
      tipItems.forEach(function (tip) {
        tip.style.display = "inline-block";
        var h = "-" + (tip.offsetHeight+30) + "px";
        var w = "-" + (tip.offsetWidth+30) + "px";
        //We offset the element
        if(tip.classList.contains('top')) { tip.style.top = h; }
        if(tip.classList.contains('right')) { tip.style.right = w; }
        if(tip.classList.contains('bottom')) { tip.style.bottom = h; }
        if(tip.classList.contains('left')) { tip.style.left = w; }
      });
    });
    //Event listener for mouse out
    item.addEventListener("mouseout", function() {
      var tips = item.querySelectorAll(".tooltip");
      tipItems = [].slice.call(tips);
      tipItems.forEach(function (tip) {
        tip.style.display = "none";
      });
    });
  });
}
