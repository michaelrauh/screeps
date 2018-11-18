// var roleHarvester = {
//     run: function(creep, spawn) {
//         if(creep.carry.energy < creep.carryCapacity) {
//             var sources = creep.room.find(FIND_SOURCES);
//             if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(sources[0]);
//             }
//         }
//         else {
//             if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(spawn);
//             }
//         }
//     }
// };
var _ = require('lodash');

var roleHarvester = {
  run: function(creep, spawn) {
    var first_source = creep.room.find(FIND_SOURCES)[0];
    var current_location = {x: creep.pos.x, y: creep.pos.y}

    if(creep.carry.energy < creep.carryCapacity) {
      var desired_location = findDesiredLocation(first_source)
    } else {
      var desired_location = findDesiredLocation(spawn)
    }

    if (!_.isEqual(desired_location, current_location)) {
      creep.moveTo(desired_location.x, desired_location.y)
    } else {
      if(creep.carry.energy < creep.carryCapacity) {
        creep.harvest(first_source)
      } else {
        creep.transfer(spawn, RESOURCE_ENERGY)
      }
    }
  }
};

function findDesiredLocation(source) {
  var first_source_pos = source.pos
  return {x: first_source_pos.x -1, y: first_source_pos.y}
}

module.exports = roleHarvester;
