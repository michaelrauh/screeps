

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

      if (room.controller.level == 5) {
        addTen(spawn.pos.x, spawn.pos.y - 8)
      }

      if (room.controller.level == 6) {
        addTen(spawn.pos.x, spawn.pos.y - 10)
      }

      if (room.controller.level == 7) {
        addTen(spawn.pos.x, spawn.pos.y - 12)
      }

      if (room.controller.level == 8) {
        addTen(spawn.pos.x, spawn.pos.y - 14)
      }
    }
};

module.exports = extensionManager
