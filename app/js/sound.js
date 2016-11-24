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
