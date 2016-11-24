$(document).ready(function () {

  // Sliders
  // Get all slide for dynamic next_slide conditions
  var slides = $('.slider--active').find('.slide__artist');
  // Get active slide class
  var slide_active = $('.slider--active .slide--active').attr('class');
  // Use Regex to extract numbers from class names
  var slide_active_get_id = slide_active.match(/\d+/);
  // Get slide_id from Regex
  var slide_active_id = slide_active_get_id[0];

  // Slider animations
  var next_slide = slide_active_id;
  // On left
  $('.chevron--left').on('click', function(){
      next_slide--;
      if (next_slide < 1) {
        next_slide = 4;
      }
      if (next_slide > 4) {
        next_slide = 1;
      }
      $('.slider--active .slide--active').addClass('slide--hidden');
      $('.slider--active .slide--active').removeClass('slide--active');
      $('.slider--active .slide__artist--'+next_slide).addClass('slide--active');
  });

  // On right
  $('.chevron--right').on('click', function(){
    next_slide++;
    if (next_slide > 4) {
      next_slide = 1;
    }
    if (next_slide < 1) {
      next_slide = 4;
    }
    $('.slider--active .slide--active').addClass('slide--hidden');
    $('.slider--active .slide--active').removeClass('slide--active');
    $('.slider--active .slide__artist--'+next_slide).addClass('slide--active');
  });

  // Days menu
  // var day_one = $('.day__menu--button-1');
  // var day_two = $('.day__menu--button-2');

  $('.day__menu--button-1').on('click', function(){
    // Reset next_slide in sliders
    $('.slider--active .slide--active').addClass('slide--hidden');
    $('.slider--active .slide--active').removeClass('slide--active');
    $('.slider--active .slide__artist--1').addClass('slide--active');
    slide_active_id = 1;

    // Active Slider
    $('.slider-2').addClass('slider--hidden');
    $('.slider-2').removeClass('slider--active');
    $('.slider-1').addClass('slider--active');
    $('.slider-1').removeClass('slider--hidden');

    // Active Day Button
    $('.day__menu--button-2').removeClass('selected');
    $('.day__menu--button-1').addClass('selected');
  });

  $('.day__menu--button-2').on('click', function(){
    // Reset next_slide
    $('.slider--active .slide--active').addClass('slide--hidden');
    $('.slider--active .slide--active').removeClass('slide--active');
    $('.slider--active .slide__artist--1').addClass('slide--active');
    slide_active_id = 1;

    // Active Slider
    $('.slider-1').addClass('slider--hidden');
    $('.slider-1').removeClass('slider--active');
    $('.slider-2').addClass('slider--active');
    $('.slider-2').removeClass('slider--hidden');

    // Active Day Button
    $('.day__menu--button-1').removeClass('selected');
    $('.day__menu--button-2').addClass('selected');
  });

  // Display Artist infos
  // Get all item--hidden in an array
  var all_item_hidden;
  $('.slide__artist').on('click', function (){
    if ($('.sliders').hasClass('display--artist')){
      $(all_item_hidden).each(function(){
        $(this).addClass('item--hidden');
      });
      $('.programmation_title_container').removeClass('programmation_title_container--hidden');
      $('.menu').removeClass('menu--hidden');
      $('.chevron').removeClass('chevron--hidden');
      $('.sliders').removeClass('display--artist');
    }
    else{
      all_item_hidden = $(this).find('.item--hidden');
      $(all_item_hidden).each(function(){
        $(this).removeClass('item--hidden');
      });
      $('.programmation_title_container').addClass('programmation_title_container--hidden');
      $('.menu').addClass('menu--hidden');
      $('.chevron').addClass('chevron--hidden');
      $('.sliders').addClass('display--artist');
    }
  });
});
