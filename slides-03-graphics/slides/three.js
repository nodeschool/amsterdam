var combine = require('@local/slide-combine')
var circle  = require('@local/slide-circle')
var image   = require('@local/slide-image')
var title   = require('@local/slide-title')

module.exports = [
    title('Intro to WebGL with three.js', 'h1')
  , title(
    'Workshopper tutorial covering three.js basics including lighting, basic shapes, mouse projections, collision detection and physics.'
  , 'blockquote')
  , title('three.js', 'h1')
  , title(
    'Three.js is a lightweight cross-browser JavaScript library/API used to create and display animated 3D computer graphics on a Web browser.'
  , 'blockquote')
  , image('slides/images/rome.jpg', null, null, 'http://ro.me')
  , image('slides/images/i-remember.jpg', null, null, 'http://i-remember.fr/en')
]
