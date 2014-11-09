var noop = (function(){})

module.exports = Slide

var slide = Slide.prototype;

function Slide(scope) {
  if (!(this instanceof Slide)) return new Slide(scope)
  this._enter = noop
  this._exit  = noop
  this.scope  = scope
}

slide.enter = function(enter) {
  this._enter = enter
  return this
}

slide.exit = function(exit) {
  this._exit = exit
  return this
}

slide.enable = function() {
  this._enter(this.scope)
  return this
}

slide.disable = function() {
  this._exit(this.scope)
  return this
}
