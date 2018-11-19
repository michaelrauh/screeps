var modes = require("./modes")
var util = require("./util")

var roleHarvester = {
  run: function(creep, spawn) {
    var mode = setMode(creep, spawn)

    if (util.adjacent(creep, mode.target)) {
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

module.exports = roleHarvester;
