

var extensionManager = {
    run: function(spawn, room) {

      function addFive(centerX, centerY) {
        room.createConstructionSite(centerX - 4, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX - 2, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 2, centerY, STRUCTURE_EXTENSION)
        room.createConstructionSite(centerX + 4, centerY, STRUCTURE_EXTENSION)
      }

      function addTen(centerX, centerY) {
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

      if (room.controller.level == 2) {
        addFive(spawn.pos.x, spawn.pos.y - 2)
      }

      if (room.controller.level == 3) {
        addFive(spawn.pos.x, spawn.pos.y - 4)
      }

      if (room.controller.level == 4) {
        addTen(spawn.pos.x, spawn.pos.y - 6)
      }
    }
};

module.exports = extensionManager
