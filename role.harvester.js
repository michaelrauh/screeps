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

    if (adjacent(desired_location, current_location)) {
      action()
    } else {
      creep.moveTo(desired_location.x, desired_location.y)
    }
  }
};

function findDesiredLocation(source) {
  var first_source_pos = source.pos
  return {
    x: first_source_pos.x,
    y: first_source_pos.y
  }
}

function adjacent(desired_location, current_location) {
  var nearX = Math.abs(desired_location.x - current_location.x) < 2
  var nearY = Math.abs(desired_location.y - current_location.y) < 2

  return nearX && nearY
}

module.exports = roleHarvester;
