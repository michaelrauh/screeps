var extensionManager = {
    run: function(spawn, room) {
      if (room.controller.level == 2) {
        centerX = spawn.pos.x
        centerY = spawn.pos.y - 2
        room.createConstructionSite(centerX - 4, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX - 2, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 2, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 4, centerY, STRUCTURE_EXTENSION)
      }
    }
};

module.exports = extensionManager
