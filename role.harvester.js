var _ = require('lodash');

var roleHarvester = {
  run: function(creep, spawn) {
    var first_source = creep.room.find(FIND_SOURCES)[0];
    var current_location = {
      x: creep.pos.x,
      y: creep.pos.y
    }

    if (creep.carry.energy < creep.carryCapacity) {
      var desired_location = findDesiredLocation(first_source)
      var action = function() {
        creep.harvest(first_source)
      }
    } else {
      var desired_location = findDesiredLocation(spawn)
      var action = function() {
        creep.transfer(spawn, RESOURCE_ENERGY)
      }
    }

    if (!_.isEqual(desired_location, current_location)) {
      creep.moveTo(desired_location.x, desired_location.y)
    } else {
      action()
    }
  }
};

function findDesiredLocation(source) {
  var first_source_pos = source.pos
  return {
    x: first_source_pos.x - 1,
    y: first_source_pos.y
  }
}

module.exports = roleHarvester;
