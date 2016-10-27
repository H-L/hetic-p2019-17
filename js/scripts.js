

// Glitch Line Vars
var glitch_lines = 5,
    glitch_line_duration_min = 5000,
    glitch_line_duration_max = 8000,
    glitch_line_timer_min = 1000,
    glitch_line_timer_max = 5000,
    glitch_line_wait_min = 100,
    glitch_line_wait_max = 3000,
    glitch_line_height_min = 1,
    glitch_line_height_max = 15,
    glitch_line_width_min = 100,
    glitch_line_width_max = 500;
    glitch_line_opacity_min = 0.1;
    glitch_line_opacity_max=0.8;

// Do you want to autostart on page load?
var glitch_autostart = 1;

// Start Glitch on page load.
window.onload = function() {
    if (glitch_autostart) {
        glitch = new glitch();
        glitch.init();
        glitch.init();

    }
}

// Random integer function (Will correctly work w/ negative numbers)
function randomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Glitch functionality

function glitch() {

    // Initialize the glitches
    // - Create divs
    // - Load divs from <glitch> element
    // - Set body to not scroll on x-axis
    // - Starts glitch animations

    this.init = function() {
        page_content = $('glitch').html();
        $('body').css('overflow-x', 'hidden');

        // Glitch Lines
        linecount = 0;
        this.glitchlines = [];
        while (linecount < glitch_lines) {
            $('body').append('<div class="glitch-line-'+linecount+'">'+page_content+'</div>');
            $('.glitch-line-'+linecount).css({
                'height': '100%',
                'width': '100%',
                'position': 'absolute',
                'top': '0',
                'left': '0'
            }).hide();
            this.glitchline('.glitch-line-'+linecount, linecount);
            linecount++;
        }



    }

    this.glitchline = function(div, id) {
        // Store an array of glitchlines
        this.glitchlines[id] = new glitchline;
        this.glitchlines[id].start(div);
    }



}


function glitchline() {

    this.start = function(div) {
        selfline = this;
        // Hold our timeouts.
        this.timeouts = [];

        // Create a move on a regular duration
        setInterval(function() {
            // Wait a random number of ms to execute
            setTimeout(function() {
                selfline.add(div);
            }, randomInt(glitch_line_wait_min, glitch_line_wait_max));
        }, randomInt(glitch_line_timer_min, glitch_line_timer_max));
    }

    this.add = function(div) {
        // change the height, width, top, and left using a random number
        $(div).css({
            'height': randomInt(glitch_line_height_min, glitch_line_height_max) + 'px',
            'width': randomInt(glitch_line_width_min, glitch_line_width_max) + 'px',
            'top': randomInt(0, $(window).height()) + 'px',
            'left': randomInt(0, $(window).width()/2) + 'px',
            'position': 'fixed',
            'overflow': 'hidden',
            'display': 'block',
            'opacity': randomInt(glitch_line_opacity_min, glitch_line_opacity_max),
            'background': 'white'
        });
        // Set random scroll top & scroll left.
        $(div).scrollTop(randomInt(0, $(window).height()));
        $(div).scrollLeft(randomInt(0, 100));

        // Prepare to hide the div
        this.remove(div);
    }

    this.remove = function(div) {
        // Hide the div at a random time interval.
        this.timeouts[div] = setTimeout(function() {
            $(div).hide();
        }, randomInt(glitch_line_duration_min, glitch_line_duration_max));
    }

}