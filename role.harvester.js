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

var roleHarvester = {
  run: function(creep, spawn) {
    var first_source_pos = creep.room.find(FIND_SOURCES)[0].pos;

    creep.moveTo(first_source_pos.x -1, first_source_pos.y)
  }
};

module.exports = roleHarvester;
