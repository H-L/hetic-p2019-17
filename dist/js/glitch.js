$(document).ready(function(){
  var img_sprites = $('.glitched-img').find('.sprite');

  // console.log(img_sprites);

  function getRandomImg(min, max){
    return Math.floor(Math.random() * max) + min;
  }

  var glitch = false;

  function glitchAnimation(){
    glitch = setInterval(
        function(){
          var randomImgId = getRandomImg(0, img_sprites.length);
          // console.log(randomImgId);
          $('.sprite').not(img_sprites[randomImgId]).addClass('hidden-sprite');
          $(img_sprites[randomImgId]).removeClass('hidden-sprite');
        },
        50
    );
  }

  $('.glitched-img').click(function(){
    console.log('Clicked');
    if (glitch) {
      console.log('glitch');
      clearInterval(glitch);
      glitch = false;
    }
    else if (!glitch) {
      console.log('!glitch');
      glitchAnimation();
    }
  });

});