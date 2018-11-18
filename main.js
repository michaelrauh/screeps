var roleHarvester = require('role.harvester');

module.exports.loop = function () {
    var spawn = Game.spawns['Spawn1']
    if (Object.keys(Game.creeps).length < 4) {
        spawn.spawnCreep([WORK, CARRY, MOVE], 'harvester' + Game.time, {memory: {role: "harvester"}});    
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep, spawn);
    }
}
