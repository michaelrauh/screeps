function addFive(room, centerX, centerY) {
  room.createConstructionSite(centerX - 4, centerY, STRUCTURE_EXTENSION)
  room.createConstructionSite(centerX - 2, centerY, STRUCTURE_EXTENSION)
  room.createConstructionSite(centerX, centerY, STRUCTURE_EXTENSION)
  room.createConstructionSite(centerX + 2, centerY, STRUCTURE_EXTENSION)
  room.createConstructionSite(centerX + 4, centerY, STRUCTURE_EXTENSION)
}

function addTen(room, centerX, centerY) {
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

var extensionManager = {
    run: function(spawn, room) {
      functions = {
        1: function(){},
        2: function(){addFive(room, spawn.pos.x, spawn.pos.y - 2)},
        3: function(){addFive(room, spawn.pos.x, spawn.pos.y - 4)},
        4: function(){addTen(room, spawn.pos.x, spawn.pos.y - 6)},
        5: function(){addTen(room, spawn.pos.x, spawn.pos.y - 8)},
        6: function(){addTen(room, spawn.pos.x, spawn.pos.y - 10)},
        7: function(){addTen(room, spawn.pos.x, spawn.pos.y - 12)},
        8: function(){addTen(room, spawn.pos.x, spawn.pos.y - 14)}
      }
      functions[room.controller.level]()
    }
};

module.exports = extensionManager
