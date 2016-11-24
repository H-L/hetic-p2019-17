function random_artist_highlight(timer) {
    setInterval(function () {
        if ($('.changed').length) {
            $('.image_artist').last().remove();
            $('.changed').removeClass("changed");
        }
        var tableau = $('.programmation_container').children().toArray();

        var random = Math.ceil(Math.random() * tableau.length) - 1;

        var artist_img=$(tableau[random]).attr('img');

        $('.programmation_container').append('<img src="imgs/'+artist_img+'" class="image_artist"  >');
        var artist_image_element=$('.image_artist').last();
            console.log(artist_image_element);
        $(artist_image_element).css({
            'top': randomInt(0, $(".section_programmation").height()/2.5) + 'px',
            'left': randomInt(0, $(".section_programmation").width()/2) + 'px',
            'transition' : '0.5s ease-in',
            'transform' : 'scale(1.5,1.5)',
            'opacity' :'0.4',
        });

        $(tableau[random]).addClass("changed");
    }, timer * 1000);
}

random_artist_highlight(5);


function randomInt(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

/*Animation Sound*/
var random_musique=[
    "sounds/Raining_steel.mp3",
    "sounds/The_Man_Who_Made_a_Monster.mp3",
    "sounds/Future_Club.mp3",
    "sounds/Behemoth.mp3",
];


/* START */

var chosen_musique= Math.ceil(Math.random()*(random_musique.length-0));
$(".sound_audio").prop("src",random_musique[chosen_musique-1]);
$(".sound_audio").prop("volume",1);
$('.sound_bar').each(function(index) {
        $(this).css({
            'animation': 'sound_animation_1 ' + ((index / 2) + 1) + 's linear infinite alternate',
        });
    });



$('.sound_container').on('click',function(){

   $('.sound_bar').each(function(index){
       if($(".sound_audio").prop("volume")==1) {
           $(this).css({
               'animation-play-state': 'paused',
           });

       }
       else {
           $(this).css({
               'animation-play-state': 'running',
           });

       }
   });
    if($(".sound_audio").prop("volume")==1) {
        $(".sound_audio").prop("volume",0);
    }
    else {
        $(".sound_audio").prop("volume",1);
    }

});
/* Change musique every 1 min */
window.setInterval(function(){
    var chosen_musique= Math.ceil(Math.random()*(random_musique.length-0));
    $(".sound_audio").prop("src",random_musique[chosen_musique-1]);

},40000);


/* SWITCH PAGE INFOS */

$('.infos_switcher_button').on('click',function() {



        if($(this).html()=="+ où dormir ?") {
            $(this).html("+ où c'est ? ");
        }
        else {
            $(this).html("+ où dormir ?");
        }
        var save_visible = $('.infos_switch_visible');
        $('.infos_switch_hide').each(function () {
            $(this).removeClass("infos_switch_hide");
            $(this).addClass("infos_switch_visible");

        });
        save_visible.each(function () {
            $(this).removeClass("infos_switch_visible");
            $(this).addClass("infos_switch_hide");

        });



});
