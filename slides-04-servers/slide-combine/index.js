var Slide = require('@local/slide')

module.exports = Combine

function Combine(slides) {
  return Slide().enter(function() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].enable()
    }
  }).exit(function() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].disable()
    }
  })
}
