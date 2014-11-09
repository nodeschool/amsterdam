var combine = require('@local/slide-combine')
var circle  = require('@local/slide-circle')
var image   = require('@local/slide-image')
var title   = require('@local/slide-title')
var code    = require('@local/slide-code')

module.exports = [
    title('Express', 'h1')
  , title(
    'Learn the basics of the Express.js framework.'
  , 'h1')
  , title('Most used framework on npm', 'h1')
  , title('Large ecosystem', 'h1')
  , code([
    'var express = require(\'express\')',
    'var app = express()',
    '',
    'app.get(\'/\', function (req, res) {',
    '  res.send(\'Hello World\')',
    '})',
    '',
    'app.listen(3000)'
  ].join('\n'))
]
