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
    var first_source_pos = first_source.pos
    var desired_location = {x: first_source_pos.x -1, y: first_source_pos.y}
    var current_location = {x: creep.pos.x, y: creep.pos.y}

    if (!_.isEqual(desired_location, current_location)) {
      creep.moveTo(first_source_pos.x -1, first_source_pos.y)
    } else {
      creep.harvest(first_source)
    }
  }
};

module.exports = roleHarvester;
