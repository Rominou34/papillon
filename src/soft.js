/*
* Soft CSS - The tweakable CSS framework
* Romain Arnaud - 2016
*/
var navBar, navBarY, navSide;

var notifs = [];

window.onload = function() {
  addToolTipListeners();
  addNavDropdownListener();
  addNavHidingLinks();

  navBar = document.querySelector("nav.top");
  if(navBar != null) {
    navBarY = navBar.offsetTop;
    if(navBar.getAttribute("data-follow") != null) {
      addNavScroll();
      addNavBarToggle();
    }
  }

  navSide = document.querySelector("nav.side");
  if(navSide != null) {
    addNavSideToggle();
  }
  /*setInterval(function() {
    console.table(notifs);
  }, 400);/**/
}

/****************************** CUSTOM ELEMENTS *******************************/

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
  softprogress.style.height = height;

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
      var elH = item.offsetHeight;
      var elW = item.offsetWidth;

      tipItems.forEach(function (tip) {
        tip.classList.add("animation-plop");
        tip.style.visibility = "visible";
        var h = tip.offsetHeight;
        var w = tip.offsetWidth;

        //We offset the element
        if(tip.classList.contains('top')) {
          tip.style.top = "-" + (h+15) + "px";
          tip.style.left = (elW/2 - w/2) + "px";
        }
        if(tip.classList.contains('right')) {
          tip.style.right = "-" + (w+15) + "px";
          tip.style.top = (elH/2 - h/2) + "px";
        }
        if(tip.classList.contains('bottom')) {
          tip.style.bottom = "-" + (h+15) + "px";
          tip.style.left = (elW/2 - w/2) + "px";
        }
        if(tip.classList.contains('left')) {
          tip.style.left = "-" + (w+15) + "px";
          tip.style.top = (elH/2 - h/2) + "px";
        }
      });
    });
    //Event listener for mouse out
    item.addEventListener("mouseout", function() {
      var tips = item.querySelectorAll(".tooltip");
      tipItems = [].slice.call(tips);
      tipItems.forEach(function (tip) {
        tip.classList.remove("animation-plop");
        tip.style.visibility = "hidden";
      });
    });
  });
}

/*************** SOFT NOTIFICATIONS ***************/

var softNotif = function(type, msg, t) {
  var not = document.createElement("div");
  var id = randomId(8);
  not.className = "soft-notif " + type;
  not.innerHTML = msg;
  var pos = 0;
  for(var k in notifs) {
    for(var i=0; i<notifs.length+1; i++) {
      var b = false;
      for(var k in notifs) {
        if(notifs[k][1]==i) {
          b=true;
        }
      }
      if(b==false) {
        pos=i;
        break;
      }
    }
  }
  not.style.bottom = ((pos*56)+10) + "px";
  notifs.push([id,pos]);
  document.body.appendChild(not);
  setTimeout(function() {
    fadeOut(not, t/2, 1);
    //not.remove();
    var rank;
    for(var j in notifs) {
      if(notifs[j][0]==id) {
        rank=j;
        break;
      }
    }
    notifs.splice(j,1);
  }, t);
}

/***************************** OTHER FUNCTIONS ********************************/

/************ NAVBAR ************/
var addNavDropdownListener = function() {
  var dropMenus = document.querySelectorAll(".submenu");
  dropItems = [].slice.call(dropMenus);
  dropItems.forEach(function (item) {
    if(item.getAttribute("data-toggle") == 'click') {
      item.addEventListener("click", function() {
        item.classList.toggle("active");
      });
    } else {
      if(item.getAttribute("data-toggle") == 'hover') {
        item.addEventListener("mouseover", function() {
          item.classList.add("active");
        });
        item.addEventListener("mouseout", function() {
          item.classList.remove("active");
        });
      }
    }

  });
}

var addNavScroll = function() {
  window.addEventListener('scroll', function(e) {
    var rect = navBar.getBoundingClientRect();
    var scrollY = document.body.scrollTop;
    if(scrollY > (navBarY)) {
      navBar.classList.add('fixed');
      var burger = navBar.querySelector(".burger");
    } else {
      navBar.classList.remove('fixed');
    }
  });
}

var addNavBarToggle = function() {
  var navToggle = navBar.querySelector(".toggle");
  navToggle.addEventListener('click', function(e) {
    var links = navBar.querySelector(".links");
    links.classList.toggle("show");
    navToggle.classList.toggle("cross");
  })
}

var addNavSideToggle = function() {
  var navToggle = navSide.querySelector(".toggle");
  navToggle.addEventListener('click', function(e) {
    navSide.classList.toggle("active");
    navToggle.classList.toggle("cross");
  })
}

addNavHidingLinks = function() {
  var navLinks = document.querySelectorAll("nav a");
  navL = [].slice.call(navLinks);
  var navToggle = document.querySelectorAll("nav .toggle");
  navT = [].slice.call(navToggle);
  navL.forEach(function (link) {
    link.addEventListener("click", function() {
      document.querySelector("nav.side").classList.remove("active");
      document.querySelector("nav .toggle").classList.remove("cross");
      document.querySelector("nav.top .links").classList.remove("show");
      navT.forEach(function (toggle) {
        toggle.classList.remove("cross");
      });
    });
  });
}

/*********** MISC ***********/

/*
* Generates a random id of length 's'
* Example: randomId(5) = 's8f2R'
*/
function randomId(s)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < s; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

/*
* Fades out an element e on a duration d
* If the second argument is "rm", the element will be removed from the DOM
*/

function fadeOut(e, d, rm) {
  e.classList.add("animation-fadeout");
  e.style.animationDuration = d+"ms";
  if(rm==1) {
    setTimeout(function() {
      e.remove();
    }, d);
  }
}
