var modes = require("./modes")
var util = require("./util")

var roleUpgrader = {
    run: function(creep, spawn) {
      util.approachAndAct(creep, setMode(creep, spawn))
    }
};

function setMode(creep, spawn) {
  if (creep.carry.energy < creep.carryCapacity) {
    return modes.harvest(creep.room.find(FIND_SOURCES)[0], creep)
  } else {
    return modes.upgradeRoom(creep, creep.room.controller)
  }
}

module.exports = roleUpgrader;
