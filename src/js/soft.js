/*
* Soft CSS - The tweakable CSS framework
* Romain Arnaud - 2016
*/






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
var soft = {
  notifs: [],
  popup: function(type, header, msg) {
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
    if(color !== null) {
      softpopup.innerHTML = "<span>" + header + "</span>"+
      "<div><p>" + msg + "</p></div><button class=\""+color+"\">Hide</button>";
    } else {
      softpopup.innerHTML = "<span>" + header + "</span>"+
      "<div><p>" + msg + "</p></div><button>Hide</button>";
    }

    try {
      softpopup.classList.add(type);
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
  },


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
  progressBar: function(minV, maxV, elem, height) {
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
  },

  /*this.progressBar.prototype.setProgress = function(prog) {
    var percent = Math.round(((prog-this.minV) / (this.maxV-this.minV))*100);
    if(percent > 100) { percent = 100; }
    this.element.querySelector("div").style.width = percent + "%";
  },*/




  /*************** SOFT NOTIFICATIONS ***************/

  notification: function(type, msg, t) {
    var not = document.createElement("div");
    var id = randomId(8);
    not.className = "soft-notif " + type;
    not.innerHTML = msg;
    var pos = 0;
    for(var k in this.notifs) {
      if (this.notifs.hasOwnProperty(k)) {
        for(var i=0; i<this.notifs.length+1; i++) {
          var b = false;
          for(var j in this.notifs) {
            if(this.notifs[j][1]===i) {
              b=true;
            }
          }
          if(b===false) {
            pos=i;
            break;
          }
        }
      }
    }
    not.style.bottom = ((pos*56)+10) + "px";
    this.notifs.push([id,pos]);
    document.body.appendChild(not);
    setTimeout(function() {
      fadeOut(not, t/2, 1);
      //not.remove();
      var rank;
      for(var j in this.notifs) {
        if(this.notifs[j][0]===id) {
          rank=j;
          break;
        }
      }
      soft.notifs.splice(j,1);
    }, t);
  },

  animateStep: function(timestamp, start, el, prop, st, en, un, dur) {
    var startTime;
    if (!start) {
      startTime = timestamp;
    } else {
      startTime = start;
    }
    var progress = timestamp - startTime;
    if(progress > dur) { // We use this so we don't go over 100%
      progress = dur;
    }
    el.style.setProperty(prop, (st+((progress/dur)*(en-st))) + un);
    if (progress < dur) {
      window.softRequestAnimationFrame(soft.animateStep, startTime, el, prop, st, en, un, dur);
    }
  },

  animate: function(el, prop, st, en, un, dura) {
    window.softRequestAnimationFrame(soft.animateStep, null, el, prop, st, en, un, dura);
  }

};
