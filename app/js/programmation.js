$(document).ready(function () {

  var slide_active = $('.slider--active .slide--active').attr('class');
  // var slides = $('.')
  var slide_active_get_id = slide_active.match(/\d+/);
  var slide_active_id = slide_active_get_id[0];

  // console.log(slide_active_id[0]);

  // slide_active_id[0]
  // $('.slider__artist--'+slide_active_id)

  $('.chevron--left').on('click', function(){
      if (slide_active_id <= 0) {
        var next_slide = 4;
      }
      else {
        next_slide = slide_active_id--;
      }
      console.log('slide_active: '+slide_active_id);
      console.log('next_slide: '+next_slide);
  });

  $('.chevron--right').on('click', function(){
    if (slide_active_id > 4) {
      var next_slide = 0;
    }
    else {
      next_slide = slide_active_id++;
    }
    console.log('slide_active: '+slide_active_id);
    console.log('next_slide: '+next_slide);
  });
});
