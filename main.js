var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    var spawn = Game.spawns['Spawn1']
    var num_creeps = Object.keys(Game.creeps).length
    if (num_creeps < 4) {
        if (num_creeps % 2 == 0) {
            spawn.spawnCreep([WORK, CARRY, MOVE], 'harvester' + Game.time, {memory: {role: "harvester"}});    
        } else {
            spawn.spawnCreep([WORK, CARRY, MOVE], 'upgrader' + Game.time, {memory: {role: "upgrader"}});    
        }
    }
            
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == "harvester") {
            roleHarvester.run(creep, spawn);    
        } else {
            roleUpgrader.run(creep, spawn);
        } 
    }
}
