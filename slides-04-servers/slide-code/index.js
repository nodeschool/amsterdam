var Slide     = require('@local/slide')
var highlight = require('highlight.js')
var multiline = require('multiline')

module.exports = SlideCode

function SlideCode(code, lang) {
  var pre = document.createElement('pre')
  if (typeof code === 'function') {
    try {
      code = multiline(code)
    } catch(e) {
      code = String(code)
        .slice(0, -1)
        .replace(/^function[\s)(]+?\{/, '')
        .trim()
    }
  }

  pre.innerHTML = highlight.highlight(
    lang || 'javascript', code
  ).value

  return Slide()
    .enter(()=> document.body.appendChild(pre))
    .exit(()=> document.body.removeChild(pre))
}
