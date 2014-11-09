var combine = require('@local/slide-combine')
var circle  = require('@local/slide-circle')
var image   = require('@local/slide-image')
var title   = require('@local/slide-title')
var code    = require('@local/slide-code')

module.exports = [
    title('Shader School', 'h1')
  , title(
    'An introduction to GLSL shaders and graphics programming that runs in your web browser.'
  , 'blockquote')
  , title('OpenGL Shading Language', 'h1')
  , title('GLSL', 'h1')
  , title('Cross-Platform', 'h2')
  , title('GPU Programming', 'h1')
  , title('Highly Parallel', 'h1')
  , code([
    '[1, 2, 3].map(function (x) {'
  , '  return x * 2'
  , '})'
  ].join('\n'))
  , title('Crazy Fast', 'h1')
  , title('Not for Free', 'h1')
  , title('No Infinite Loops', 'h1')
  , title('No Recursion', 'h1')
  , title('No Memory Allocation', 'h1')
  , title('No Strings', 'h1')
  , title('Good Luck!', 'h1')
]
