var modes = require("./modes")
var util = require("./util")

var roleUpgrader = {
    run: function(creep, spawn) {
      setBias(creep)

      util.approachAndAct(creep, setMode(creep, spawn))
    }
};

function setBias(creep) {
  if (creep.carry.energy == creep.carryCapacity) {
    creep.memory.bias = "upgrade"
  }

  if (creep.carry.energy == 0) {
    creep.memory.bias = "harvest"
  }
}

function setMode(creep, spawn) {
  if (creep.memory.bias == "harvest") {
    return modes.harvest(creep.room.find(FIND_SOURCES)[0], creep)
  } else {
    return modes.upgradeRoom(creep, creep.room.controller)
  }
}

module.exports = roleUpgrader;
