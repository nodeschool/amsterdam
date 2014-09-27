var Slide = require('@local/slide')

module.exports = SlideCircle

function SlideCircle(uri, update) {
  var circle = document.createElement('div')

  circle.style.position = 'absolute'
  circle.style.top = '50%'
  circle.style.left = '50%'
  circle.style.transform = 'translate(-50%, -50%)'
  circle.style.width = '18vw'
  circle.style.height = '18vw'
  circle.style.borderRadius = '40vw'
  circle.style.backgroundImage = 'url('+uri+')'
  circle.style.backgroundSize = 'cover'
  circle.style.backgroundPosition = '50% 50%'

  if (update) update(circle)

  return Slide().enter(function() {
    document.body.appendChild(circle)
  }).exit(function() {
    document.body.removeChild(circle)
  })
}
