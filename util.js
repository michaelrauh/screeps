function adjacent(source, target) {
  var nearX = Math.abs(source.pos.x - target.pos.x) < 2
  var nearY = Math.abs(source.pos.y - target.pos.y) < 2

  return nearX && nearY
}


module.exports = {adjacent}
