var Slide = require('@local/slide')

module.exports = SlideTitle

function SlideTitle(title, name, update) {
  var el    = document.createElement(name)
  var slide = Slide()

  el.innerHTML = title
  el.style.position = 'absolute'
  el.style.top = '50%'
  el.style.left = '50%'
  el.style.transform = 'translate(-50%, -50%)'

  if (update) update(el)

  return slide
    .enter(() => document.body.appendChild(el))
    .exit(() => document.body.removeChild(el))
}
