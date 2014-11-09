var progress = document.body.appendChild(document.createElement('div'))
var flatten  = require('flatten')

progress.classList.add('progress')
progress.style.width = 0

module.exports = Show

function Show(slides) {
  slides = flatten(slides).filter(function(slide) {
    return Object.keys(slide).length
  })

  console.log(slides.length + ' slides')

  var total = slides.length
  var index = -1

  move(1)

  function move(n) {
    var prevIndex = index
    var nextIndex =(index + n + total) % total

    if (prevIndex === nextIndex) {
      return
    }

    if (slides[prevIndex]) slides[prevIndex].disable()
    if (slides[nextIndex]) slides[nextIndex].enable()

    index = nextIndex
    progress.style.width = 100 * (index / total) + '%'
  }

  return move
}
