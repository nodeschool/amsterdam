var noop = (function(){})

module.exports = Slide

function Slide(scope) {
  if (!(this instanceof Slide)) return new Slide(scope)
  this._enter = noop
  this._exit  = noop
  this.scope  = scope
}

Slide.prototype.enter = function(enter) {
  this._enter = enter
  return this
}

Slide.prototype.exit = function(exit) {
  this._exit = exit
  return this
}

Slide.prototype.enable = function() {
  this._enter(this.scope)
  return this
}

Slide.prototype.disable = function() {
  this._exit(this.scope)
  return this
}
