var roleHarvester = {
  run: function(creep, spawn) {

    var mode = setMode(creep, spawn)

    var desired_location = findDesiredLocation(mode.target)

    var current_location = {
      x: creep.pos.x,
      y: creep.pos.y
    }

    if (adjacent(desired_location, current_location)) {
      mode.action()
    } else {
      creep.moveTo(desired_location.x, desired_location.y)
    }
  }
};

function setMode(creep, spawn) {
  if (creep.carry.energy < creep.carryCapacity) {
    var first_source = creep.room.find(FIND_SOURCES)[0];
    target = first_source
    action = function() {
      creep.harvest(first_source)
    }
  } else {
    target = spawn
    action = function() {
      creep.transfer(spawn, RESOURCE_ENERGY)
    }
  }

  return {
    target: target,
    action: action
  }
}

function findDesiredLocation(location) {
  return {
    x: location.pos.x,
    y: location.pos.y
  }
}

function adjacent(desired_location, current_location) {
  var nearX = Math.abs(desired_location.x - current_location.x) < 2
  var nearY = Math.abs(desired_location.y - current_location.y) < 2

  return nearX && nearY
}

module.exports = roleHarvester;
