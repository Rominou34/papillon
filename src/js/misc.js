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

(function() {
    var lastTime = 0;

    /*
    * Redefinition of window.requestAnimationFrame but with more parameters
    */
    window.softRequestAnimationFrame = function(callback, startTime, element, property, start, end, unit, duration) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 1 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback((currTime + timeToCall), startTime, element, property, start, end, unit, duration);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    window.softCancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}());

/*
* Function changing the Papillon theme
* Works by changing the stylesheet to another one with a different color theme
* Stylesheet declaration ( <link href="STYLE"> ) must have the id "main-style"
*/
function changeStylesheet(newStyle) {
  var styleElem = document.getElementById("main-style");
  styleElem.href = newStyle;
}
