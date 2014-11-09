var combine = require('@local/slide-combine')
var circle  = require('@local/slide-circle')
var image   = require('@local/slide-image')
var title   = require('@local/slide-title')
var code    = require('@local/slide-code')

module.exports = [
    title('Hapi', 'h1')
  , title(
    'Learn all about hapi through a series of challenges.'
  , 'h1')
  , title('Developed by WalMart', 'h1')
  , title('Batteries included™', 'h1')
  , code([
    'var Hapi = require(\'hapi\');',
    '',
    'var server = new Hapi.Server(\'localhost\', 8000);',
    '',
    'server.route({',
    '  method: \'GET\',',
    '  path: \'/hello\',',
    '  handler: function (request, reply) {',
    '',
    '    reply(\'hello world\');',
    '  }',
    '});',
    '',
    'server.start();'
  ].join('\n'))
]
