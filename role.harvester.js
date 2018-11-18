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
    var first_source = creep.room.find(FIND_SOURCES)[0];

    creep.moveTo(first_source)
  }
};

module.exports = roleHarvester;
