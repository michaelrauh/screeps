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

      if (room.controller.level == 3) {
        centerX = spawn.pos.x
        centerY = spawn.pos.y - 4
        room.createConstructionSite(centerX - 4, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX - 2, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 2, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 4, centerY, STRUCTURE_EXTENSION)
      }

      if (room.controller.level == 4) {
        centerX = spawn.pos.x
        centerY = spawn.pos.y - 6
        room.createConstructionSite(centerX - 9, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX - 7, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX - 5, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX - 3, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX - 1, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 1, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 3, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 5, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 7, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 9, centerY, STRUCTURE_EXTENSION)
      }
    }
};

module.exports = extensionManager
