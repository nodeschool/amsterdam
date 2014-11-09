var slides = require('@local/slides')
var show   = require('@local/show')(slides)
var keys   = require('mousetrap')

keys.bind(['left', 'up', 'pageup'], show.bind(null, -1))
keys.bind(['right', 'down', 'pagedown'], show.bind(null, +1))
