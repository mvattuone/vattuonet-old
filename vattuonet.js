if (Meteor.isClient) {

//spinjs
(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});

var Panel = function(el) {
    this.init(el);
}

Panel.prototype = {

    init: function(el) {
        //set up events, set width and height
        var self = this //in case we need to get to this context,
            this.element = el,
            width = window.innerWidth,
            height = window.innerHeight;
        $(this.element).height(height);
        $(this.element).width(width);
        this.setEventHandlers();

    },

    setEventHandlers: function() {
        $(window).on('resize',function() {
            var width = window.innerWidth,
                height = window.innerHeight;
            $('.panel').height(height).width(width);
        });
    },
}

var Tracker = function() {
    //INITIAL VARIABLES AND SHIT
    this.panels = $('.panel'),

    //should init with first panel as slider and the next as the fixed
    this.slidingPanel = this.panels.eq(0),
    this.fixedPanel = this.slidingPanel.next(),

    //panelIndex starts at 1
    this.panelIndex = this.fixedPanel.index(),

    //if doCheck is false, switchPanel doesn't get run
    this.doCheck = true, 

    //for checking direction
    this.scrollPosition = 0,
    this.direction,

    //lest we forget the dummy panel
    this.lastPanel = this.panels.index() - 1;

    //bring the dom to lyfe
    this.slidingPanel.addClass('sliding');
    this.fixedPanel.addClass('fixed');
}

Tracker.prototype = {
    init: function(self) {
            Tracker.constructor();
            this.setEventHandlers(this);
    },

    checkScrollPosition:  function() {
        var newScrollPosition = $(document).scrollTop();
        if (newScrollPosition > this.scrollPosition) {
            if (this.direction !== "down") { this.direction = "down"; }
        } else {
            if (this.direction !== "up") { this.direction = "up"; }
        }
        this.scrollPosition = newScrollPosition;
    },

    //this function should move the fixed and current panels to the next 
    //elements that are active and reset the object values
    switchPanel: function(direction) {
       if (direction === "down") {
            this.slidingPanel.removeClass('sliding').next().addClass('sliding');
            this.fixedPanel.removeClass('fixed').next().addClass('fixed');
        } else {
            this.slidingPanel.removeClass('sliding').prev().addClass('sliding');
            this.fixedPanel.removeClass('fixed').prev().addClass('fixed');
        }
        this.fixedPanel = $('.fixed');
        this.slidingPanel = $('.sliding');
    },

    handleThreshold: function() {

        var nextPanelThreshold = this.panels.height() * this.panelIndex,
            prevPanelThreshold = this.panels.height() * (this.panelIndex - 1);

        if (this.scrollPosition >= (nextPanelThreshold) && this.doCheck) {
                this.switchPanel(this.direction);
                
                //If the last panel is fixed...
                if (this.fixedPanel.index() === (this.lastPanel)) {
                    this.doCheck = false;
                } 

                this.panelIndex = this.panels.index($('.panel.fixed'));
            //we are going up and the previous panel's height is met
        } else if (this.direction === "up" && $(document).scrollTop() <= (prevPanelThreshold)) {
            if (this.slidingPanel.index() !== this.lastPanel) {
                this.doCheck = true;
                //don't do anything if you're going up and it's the first panel
                if (this.slidingPanel.index() === 0) {
                    return false;
                } else {
                    this.panelIndex = (this.panels.index($('.panel.fixed')) - 1);
                    this.switchPanel(this.direction);
                }
            }
        }
    },

    movePanel: function(direction, callback) {
        if (direction === "down") {
            if (this.panelIndex >= this.panels.length) {
                return false
            } else {
                $('body,html').animate({
                    scrollTop: window.innerHeight * this.panelIndex
                }, 500);            
            }
        } else {
            if (this.panel <= 1) {
                return false
            } else {
                $('body,html').animate({
                    scrollTop: ($(document).scrollTop() - (window.innerHeight))
                }, 500);
            }
        }
    },

    setEventHandlers: function(tracker) {

        $(window).scroll(function() {
            tracker.checkScrollPosition();
            tracker.handleThreshold();
        });

        $('body,html').on('wheel', function(e) {
            if (window.preventDuplicateMouseWheelScrolls)
                return false;
            window.preventDuplicateMouseWheelScrolls = true;
            window.setTimeout(function() { window.preventDuplicateMouseWheelScrolls = false; }, 1100 );
            if (e.originalEvent.wheelDelta > 0) {
                tracker.movePanel('up', function() { return false; });
            } else {
                tracker.movePanel('down', function() { return false; });
            }
            e.preventDefault();
            e.stopPropagation();
        })

        $(document).on('keydown', function(event){
            if (window.preventDuplicateKeyPresses)
                return false;

            window.preventDuplicateKeyPresses = true;
            window.setTimeout(function() { window.preventDuplicateKeyPresses = false; }, 600 );
            var unicode = event.keyCode ? event.keyCode : event.charCode;
            if(unicode === 40) {
                event.preventDefault();
                tracker.movePanel('down');
            }
            if(unicode === 38){
                event.preventDefault();
                tracker.movePanel('up');
            }
        });
    }

}

function getRandomRGB() {
    return value = Math.floor(Math.random() * 255);
}

//I love how stupid this function is.
function explodeInternet(firstTime) {
    var red = getRandomRGB(),
        green = getRandomRGB(),
        blue = getRandomRGB(),
        sillies = ["(╯°□°）╯︵ ┻━┻ ", "(´◉◞౪◟◉)", "☮▁▂▃▄☾ ♛ ◡ ♛ ☽▄▃▂▁☮", "◖|◔◡◉|◗", "ლ(ಠ益ಠლ)", "̿ ̿̿'̿'\̵͇̿̿\=(•̪●)=/̵͇̿̿/'̿̿ ̿ ̿ ̿"],
        blip = "<span class='silly' style='left:" + Math.floor(Math.random() * window.innerWidth) + "px; top: " + Math.floor(Math.random() * window.innerHeight) + "px; font-size:" + Math.floor(Math.random() * 48) + "px; -webkit-animation: god-damn-it 5s infinite; animation:god-damn-it 5s infinite;  z-index:100000000; color: rgb(" + red + "," + green + "," + blue + "); position:fixed'>" + sillies[Math.floor(Math.random() * sillies.length)] + "</span>";
    if ($('.silly').length === 20 && firstTime) {
        $('body').append("<h1 class='error' style='color:red; position: fixed; z-index:1200000000; top: 20px; left: 20px;'>What did you do?  Ugh... I have to try and clean this up now...</h1>");
    } else if ($('.silly').length === 50 && firstTime) {
        $('body').append("<h1 class='error' style='color:red; position: fixed; z-index:1200000000; top: 60px; left: 20px;'>Would you mind clicking that pi button?  I can't seem to find my broom...</h1>");
    }
    $('body').append(blip);
}

function createSpinner() {
    var opts = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#000', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 'auto', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };

    var target = document.getElementById('loader');
    var spinner = new Spinner(opts).spin(target);
    return spinner;
}

//creates fade-in effect to hide loading content
function displaySite() {
    $(document).scrollTop(0);
    $("#content").addClass('visible');
}

function initTracker() {
    var tracker = new Tracker();
    return tracker.init(tracker);
}

function initPanels() {
    //append empty dummy panel to the DOM so we can emulate scrolling for the last fixed slide.
    var dummy = "<div class='panel dummy'></div>";
    $('.panel').parent().append(dummy);

    var panels = $('.panel'),
        panelized = {};
    panels.each(function() {
       panelized[this] = new Panel(this);
    });
  
    initTracker();
}




$(document).ready(function() {

    //init spinner first
    createSpinner();

    initPanels(); //also inits tracker

    //variables we need
    var exploded = false, //if pi is clicked, set to true
        firstTime = true; //if the button is clicked for the first time
                          //set to false

    $('#careful').on('click', function() {
        if (!exploded) {
            setInterval(function() { explodeInternet(firstTime) }, 200);
            exploded = true;
        } else {
            $('.silly, .error').remove();
            $('body').append("<h1 class='success' style='color:green; position: fixed; z-index:12000000000; top: 20px; left: 20px;'>Phew... that was close.  Back to watching Beavis and Butthead.</h1>");
            setTimeout(function() {
                firstTime = false;
                $('.success').remove() //REMOVE THY SUCCESS, MORTAL
                $('body').append("<h1 class='error' style='color:red; position: fixed; z-index:12000000000; top: 20px; left: 20px;'>Ah crap, not again!  Maybe click the pi button?  I'm going to get my rifle.</h1>");
            },1500);
        }
    });

    //once everything is ready, then we unveil
    $(window).load(function() {
        $('.spinner').hide();
        displaySite();
    });
});
  
}
