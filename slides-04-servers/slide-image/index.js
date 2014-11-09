var Slide = require('@local/slide')

module.exports = SlideImage

function SlideImage(uri, scale, update, href) {
  var image = new Image

  scale = (scale || 0.75) * 100 + '%'

  image.style.position = 'absolute'
  image.style.top = '50%'
  image.style.left = '50%'
  image.style.transform = 'translate(-50%, -50%)'
  image.style.width = scale
  image.onload = loaded
  image.src = uri

  if (update) update(image)
  if (href) {
    image.style.cursor = 'pointer'
    image.addEventListener('click', function(e) {
      window.open(href, '_blank')
    }, false)
  }

  return Slide().enter(function() {
    document.body.appendChild(image)
  }).exit(function() {
    document.body.removeChild(image)
  })

  function loaded() {
    if (image.width > image.height) return
    image.style.height = scale
    image.style.width = null
  }
}
