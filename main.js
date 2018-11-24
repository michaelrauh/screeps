var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var extensionManager = require('extensionManager')

module.exports.loop = function () {
    var spawn = Game.spawns['Spawn1']

    extensionManager.run(spawn, spawn.room)
    var num_creeps = Object.keys(Game.creeps).length
    if (num_creeps < 6) {
        if (num_creeps % 3 == 0) {
            spawn.spawnCreep([WORK, CARRY, MOVE], 'harvester' + Game.time, {memory: {role: "harvester"}});
        } else if (num_creeps % 3 == 1){
            spawn.spawnCreep([WORK, CARRY, MOVE], 'upgrader' + Game.time, {memory: {role: "upgrader"}});
        } else {
          spawn.spawnCreep([WORK, CARRY, MOVE], 'builder' + Game.time, {memory: {role: "builder"}});
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == "harvester") {
            roleHarvester.run(creep, spawn);
        } else if (creep.memory.role == "upgrader"){
            roleUpgrader.run(creep, spawn);
        } else {
            roleBuilder.run(creep);
        }
    }
}
