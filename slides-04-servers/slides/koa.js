var combine = require('@local/slide-combine')
var circle  = require('@local/slide-circle')
var image   = require('@local/slide-image')
var title   = require('@local/slide-title')
var code    = require('@local/slide-code')

module.exports = [
    title('Koa', 'h1')
  , title(
    'Getting started with Koa, the next generation web framework for Node.js.'
  , 'h1')
  , title('Spiritual successor to Express', 'h1')
  , title('Yields ES6', 'h1')
  , code([
    'var koa = require(\'koa\');',
    'var app = koa();',
    '',
    'app.use(function *(){',
    '  this.body = \'Hello World\';',
    '});',
    '',
    'app.listen(3000);'
  ].join('\n'))
]
