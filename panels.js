if (Meteor.isClient) {
//TODO:  Refactor so that the event first changes
//the panels before doing the animate.
//movePanel should be the last thing that fires
//handleThreshold should check where it is currently,
//what direction it is going, and what it should do


var Config = {
    wheelSensitivity: 1300,
}

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

Tracker = function() {
    //INITIAL VARIABLES AND SHIT
    this.panels = $('.panel'),

    //panelIndex starts at 0
    this.panelIndex = 0,
    this.slidingPanel = this.panels.eq(this.panelIndex),
    this.fixedPanel = this.slidingPanel.next(),

    //if doCheck is false, switchPanel doesn't get run
    this.doCheck = true, 

    this.direction,

    //-2 because we have a fake panel that we don't want to include with the others
    //and because we are doing base 0
    this.lastPanel = this.panels.length - 2;

    //bring the dom to lyfe
    this.slidingPanel.addClass('sliding');
    this.fixedPanel.addClass('fixed');
}

Tracker.prototype = {
    init: function(self) {
        Tracker.constructor();
        this.setEventHandlers(this);
    },

    //this should determine the current panel
    //and determine whether the swipe is valid
    handleSwipe: function(direction) {
        this.direction = direction;
        var move = false;
        if (this.direction === "up") {
            if (this.panelIndex > 0) {
                move = true; 
                this.panelIndex--;
            } 
        } else {
            if (this.panelIndex < this.lastPanel) {
                move = true;
                this.panelIndex++; 
            }
        }
        if (move) {
            console.log('handle swipe - panelindex is ' + this.panelIndex +  ' - ' + this.direction);
            this.movePanel();
        }
        window.setTimeout(function() { window.preventDuplicateMouseWheelScrolls = false; }, Config.wheelSensitivity )
    },

    movePanel: function() {
        var self = this; 
        if (this.direction === "down") {
            scrollVal = window.innerHeight * this.panelIndex        
        }  else {
            scrollVal = $(document).scrollTop() - window.innerHeight
        } 
        if (this.direction === "up") {
            this.slidingPanel.removeClass('sliding').prev().addClass('sliding');
            this.fixedPanel.removeClass('fixed').prev().addClass('fixed');
            this.fixedPanel = $('.fixed');
            this.slidingPanel = $('.sliding');
        } 
        $('body').animate({ 
            scrollTop: scrollVal
        }, 500, function() {
            if (self.direction == "down") {
                self.slidingPanel.removeClass('sliding').next().addClass('sliding');
                self.fixedPanel.removeClass('fixed').next().addClass('fixed'); 
                self.fixedPanel = $('.fixed');
                self.slidingPanel = $('.sliding');    
            }
        })    
    },

    setEventHandlers: function(tracker) {
        $('body').on('mousewheel wheel keydown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (window.preventDuplicateMouseWheelScrolls)
                return false;
            window.preventDuplicateMouseWheelScrolls = true;
            if (e.originalEvent.wheelDeltaY > 0 || e.keyCode === 38) {
                tracker.handleSwipe('up');
            } else if (e.originalEvent.wheelDeltaY < 0 || e.keyCode === 40) {
                tracker.handleSwipe('down');
            }
        })
    }

}

function initTracker() {
    window.tracker = new Tracker();
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

(function() {
    Panels = {
      init: initPanels  
    } 
})(window);


}