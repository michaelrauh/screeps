var modes = require("./modes")
var util = require("./util")

var roleBuilder = {
    run: function(creep) {
      setBias(creep)

      util.approachAndAct(creep, setMode(creep))
    }
};

function setBias(creep) {
  if (creep.carry.energy == creep.carryCapacity) {
    creep.memory.bias = "build"
  }

  if (creep.carry.energy == 0) {
    creep.memory.bias = "harvest"
  }
}

function setMode(creep) {
  if (creep.memory.bias == "harvest") {
    return modes.harvest(creep.room.find(FIND_SOURCES)[0], creep)
  } else {
    return modes.build(creep, creep.room.find(FIND_CONSTRUCTION_SITES)[0])
  }
}

module.exports = roleBuilder;
