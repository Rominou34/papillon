"use strict";

var navBar, navBarY, navSide;
var d = -1;
window.onload = function() {
  // Add event listeners to display tooltips on hover
  addToolTipListeners();

  // Add event listeners to display dropdown menus on action
  addNavDropdownListener();

  // Add event listeners to hide dropdown menus on click
  addNavHidingLinks();

  // Add event listeners for spoiler blocks
  addSpoilerListeners();

  // Add listener to close a banner if there is one
  addBannerListener();

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

  /*********************** EXPERIMENTAL *****************************/
  window.addEventListener("scroll", function() {
    var date = new Date();
    if(d==-1 || date.getTime() - d >= 400) {
      console.log("Scroll !");
      console.log(date.getTime());
      d = date.getTime();
    } else {
      d = date.getTime();
    }
  });
  /******************************************************************/
}

/*************** SOFT TOOLTIPS ***************/


/*
* This function adds and event listener to all tooltips so they appear on
* hover
*/
var addToolTipListeners = function() {
  var toolTips = document.querySelectorAll(".soft-tooltip");
  var toolTipItems = [].slice.call(toolTips);
  toolTipItems.forEach(function (item) {
    //Event listener for hover
    item.addEventListener("mouseover", function() {
      var tips = item.querySelectorAll(".tooltip");
      var tipItems = [].slice.call(tips);
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
      var tipItems = [].slice.call(tips);
      tipItems.forEach(function (tip) {
        tip.classList.remove("animation-plop");
        tip.style.visibility = "hidden";
      });
    });
  });
}

/***************************** OTHER FUNCTIONS ********************************/

/*
* This function adds an event listener on all submenus to display the
* child dropdown menu on hover / click
*/
var addNavDropdownListener = function() {
  var dropMenus = document.querySelectorAll(".submenu");
  var dropItems = [].slice.call(dropMenus);
  dropItems.forEach(function (item) {

    if(item.getAttribute("data-toggle") === 'hover') {
      item.addEventListener("mouseover", function() {
        disableNavDropdown();
        item.classList.add("active");
      });
      item.addEventListener("mouseout", function() {
        item.classList.remove("active");
      });
    } else {
      item.addEventListener("click", function() {
        if(item.classList.contains("active")) {
          disableNavDropdown();
        } else {
          disableNavDropdown();
          item.classList.toggle("active");
        }
      });
    }
  });
}

/*
* This function is used so when you open a dropdown menu, all other open
* dropdown menus get closed
*/
var disableNavDropdown = function() {
  var dropMenus = document.querySelectorAll(".submenu");
  var dropItems = [].slice.call(dropMenus);
  dropItems.forEach(function (item) {
    item.classList.remove("active");
  });
}

/*
* This function adds an event listener to the window that fixes the nav
* on top of the screen if you scroll past it
*/
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

/*
* This function adds an event listener so a click on the toggle button
* displays the links on mobile
*/
var addNavBarToggle = function() {
  var navToggle = navBar.querySelector(".toggle");
  navToggle.addEventListener('click', function(e) {
    var links = navBar.querySelector(".links");
    links.classList.toggle("show");
    navToggle.classList.toggle("cross");
  })
}

/*
* Same as addNavBarToggle(), but for nav.side
*/
var addNavSideToggle = function() {
  var navToggle = navSide.querySelector(".toggle");
  navToggle.addEventListener('click', function(e) {
    navSide.classList.toggle("active");
    navToggle.classList.toggle("cross");
  })
}

/*
* This function adds an event listener on toggle so that when you click
* on a toggle on mobile, it closes all other open nav menus
*/
var addNavHidingLinks = function() {
  var navLinks = document.querySelectorAll("nav a");
  var navL = [].slice.call(navLinks);
  var navToggle = document.querySelectorAll("nav .toggle");
  var navT = [].slice.call(navToggle);
  navL.forEach(function (link) {
    link.addEventListener("click", function() {
      // nav.side
      var navSide_t = document.querySelector("nav.side");
      if(navSide_t != null) {
        navSide_t.classList.remove("active");
      }
      // nav.toggle
      var navToggle_t = document.querySelector("nav .toggle");
      if(navToggle_t != null) {
        navToggle_t.classList.remove("cross");
      }
      // nav.top
      var navTop_t = document.querySelector("nav.top .links");
      if(navTop_t != null) {
        navTop_t.classList.remove("show");
      }

      navT.forEach(function (toggle) {
        toggle.classList.remove("cross");
      });
    });
  });
}

/* Adds spoiler listeners */
var addSpoilerListeners = function() {
  var spoilerBlocks = document.querySelectorAll(".spoiler-block");
  var spoilerB = [].slice.call(spoilerBlocks);
  spoilerB.forEach(function(spoilerBlock) {
    var spoilerToggle = spoilerBlock.querySelector("button");
    spoilerToggle.addEventListener("click", function() {
      var spoilerContent = spoilerToggle.parentElement.querySelector(".spoiler-content");
      if(spoilerContent.style.display == "block") {
        spoilerContent.style.display = "none";
      } else {
        spoilerContent.style.display = "block";
      }
    })
  })
}

var addBannerListener = function() {
  var bannerElement = document.querySelectorAll(".banner-top, .banner-bot");
  var banners = [].slice.call(bannerElement);
  banners.forEach(function(banner) {
    var closeElement = banner.querySelector(".close");
    closeElement.addEventListener("click", function() {
      this.parentElement.remove();
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
