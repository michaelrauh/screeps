var modes = require("./modes")
var roleHarvester = {
  run: function(creep, spawn) {
    var mode = setMode(creep, spawn)

    if (adjacent(creep, mode.target)) {
      mode.action()
    } else {
      creep.moveTo(mode.target.pos.x, mode.target.pos.y)
    }
  }
};

function setMode(creep, spawn) {
  if (creep.carry.energy < creep.carryCapacity) {
    return modes.harvest(creep.room.find(FIND_SOURCES)[0], creep)
  } else {
    return modes.deposit(creep, spawn)
  }
}

function adjacent(source, target) {
  var nearX = Math.abs(source.pos.x - target.pos.x) < 2
  var nearY = Math.abs(source.pos.y - target.pos.y) < 2

  return nearX && nearY
}

module.exports = roleHarvester;
