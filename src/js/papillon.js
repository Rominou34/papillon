/*
* Papillon CSS - The beautiful CSS framework
* Romain Arnaud - 2016
*/

/*
* This is the papillon super variable
* Pretty much every function of the framework except the one occuring automatically
* are here.
* You call the functions like that: p.notification(), p.animate(), etc.
*/
var p = {

  /*
  * An array containing the notifications ( used so they can pile up without
  * covering each other )
  */
  notifs: [],

  /*
  * Displays a big popup with a mask being it, covering all the screen
  * Used for important messages
  * -- PARAMS --
  * type: type of popup ( info / success / warning / danger )
  * header: Message to display in the header
  * msg: Message
  */
  popup: function(type, header, msg) {
    // Creating the element and the mask
    var softpopupmask = document.createElement("div");
    softpopupmask.className = "soft-popupmask";

    var softpopup = document.createElement("div");
    softpopup.className = "soft-popup ";


    // Adding the text inside the element
    softpopup.innerHTML = "<span>" + header + "</span>"+
    "<div><p>" + msg + "</p></div><button class=\""+type+"\">Hide</button>";

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

  /*
  * Function used to display a small notification in the bottom right corner,
  * fading out after some time. Multiple notifications called at the same time
  * pile up instead of covering each other
  * -- PARAMS --
  * type: The type of notification ( info / success / warning / danger )
  * msg: The message to display
  * t: The time ( in ms ) before the notification fades out
  */
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

    // Makes the notif disappear after the given time
    setTimeout(function() {
      fadeOut(not, t/2, 1);
      //not.remove();
      var rank;
      // We get the pos of the div in the notifs array
      for(var j in this.notifs) {
        if(this.notifs[j][0]===id) {
          rank=j;
          break;
        }
      }
      // We delete the div from the array
      p.notifs.splice(j,1);
    }, t);
  },

  /*
  * Function called every frame by the custom animate function
  * It's using a polyfill of window.requestAnimationFrame to run 60 FPS
  * For params, see animate()
  */
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

  /*
  * Custom animate function, animating properties at 60 FPS
  * -- PARAMS --
  * el: The DOM element to animate
  * prop: The property to animate ( width, height, padding, etc. )
  * st: The starting value
  * en: The ending value
  * un: The unity ( px, %, etc. )
  * dura: The duration of the animation ( in ms )
  */
  animate: function(el, prop, st, en, un, dura) {
    window.softRequestAnimationFrame(soft.animateStep, null, el, prop, st, en, un, dura);
  }

};
