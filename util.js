function adjacent(source, target) {
  var nearX = Math.abs(source.pos.x - target.pos.x) < 2
  var nearY = Math.abs(source.pos.y - target.pos.y) < 2

  return nearX && nearY
}

function approachAndAct(creep, mode) {
    if (adjacent(creep, mode.target)) {
      mode.action()
    } else {
      creep.moveTo(mode.target.pos.x, mode.target.pos.y)
    }
}

module.exports = {adjacent, approachAndAct}
