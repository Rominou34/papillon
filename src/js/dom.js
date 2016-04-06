var navBar, navBarY, navSide;

window.onload = function() {
  addToolTipListeners();
  addNavDropdownListener();
  addNavHidingLinks();

  navBar = document.querySelector("nav.top");
  if(navBar !== null) {
    addNavBarToggle();
    navBarY = navBar.offsetTop;
    if(navBar.getAttribute("data-follow") !== null) {
      addNavScroll();
    }
  }

  navSide = document.querySelector("nav.side");
  if(navSide !== null) {
    addNavSideToggle();
  }
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

/***************************** OTHER FUNCTIONS ********************************/

/************ NAVBAR ************/
var addNavDropdownListener = function() {
  var dropMenus = document.querySelectorAll(".submenu");
  dropItems = [].slice.call(dropMenus);
  dropItems.forEach(function (item) {
    if(item.getAttribute("data-toggle") === 'click') {
      item.addEventListener("click", function() {
        item.classList.toggle("active");
      });
    } else {
      if(item.getAttribute("data-toggle") === 'hover') {
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

/*
* Fades out an element e on a duration d
* If the second argument is "rm", the element will be removed from the DOM
*/

function fadeOut(e, d, rm) {
  e.classList.add("animation-fadeout");
  e.style.animationDuration = d+"ms";
  if(rm===1) {
    setTimeout(function() {
      e.remove();
    }, d);
  }
}
