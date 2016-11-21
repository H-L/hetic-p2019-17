var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

stage.interactive = true;

var container = new PIXI.Container();
stage.addChild(container);

// FILTER
var displacementSprite = PIXI.Sprite.fromImage('imgs/required/assets/displace.png');
var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite, 20);

displacementSprite.position.y = 0;
displacementSprite.position.x = window.innerWidth;

stage.addChild(displacementSprite);

container.filters = [displacementFilter];

// RING
var ring = PIXI.Sprite.fromImage('imgs/required/assets/ring.png');

ring.anchor.set(0.5);

ring.visible = false;

stage.addChild(ring);

// GRASS
var bg = PIXI.Sprite.fromImage('imgs/required/assets/bkg-grass.jpg');
bg.width = renderer.width;
bg.height = renderer.height;

bg.alpha = 0.4;
bg.anchor.set(0.5);
bg.position.x = renderer.width / 2;
bg.position.y = renderer.height / 2;

container.addChild(bg);

// ANIMATIONS
var count = 0;

animate();


function animate()
{
    // displacementSprite.rotation += 0.01;
    displacementSprite.scale.x = 1 + Math.sin(count) * 0.04;
    displacementSprite.scale.y = 1 + Math.cos(count) * 0.04;

    displacementSprite.y += 6;

    var test = contain(displacementSprite, container);

    count += 0.05;
    renderer.render(stage);
    requestAnimationFrame(animate);
}

function contain(sprite, container) {

  var collision = undefined;

  //Bottom
  if (sprite.y + sprite.height > container.height + sprite.height) {
    sprite.y = 0 - sprite.height;
    collision = "bottom";
  }

  //Return the `collision` value
  return collision;
}
