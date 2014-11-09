/**
 * Module dependencies.
 */

var combine = require('@local/slide-combine')
var circle = require('@local/slide-circle')
var image = require('@local/slide-image')
var title = require('@local/slide-title')

/**
 * Slides.
 */

module.exports = [
  image('slides/images/logo.png', 0.5, (img) => img.style.top = '45%'),
  combine([
    title('e-Focus', 'h1', (img) => img.style.left = '35%'),
    circle('slides/images/wercker.jpg', (circle) => circle.style.left = '65%')
  ]),
  title('#4: Servers!', 'h1'),
  title('Frameworks', 'h1')
]
