function addFive(room, centerX, centerY) {
  for (var i = -4; i <= 4; i+=2) {
    room.createConstructionSite(centerX + i, centerY, STRUCTURE_EXTENSION)
  }
}

function addTen(room, centerX, centerY) {
  for (var i = -9; i <= 9; i+=2) {
    room.createConstructionSite(centerX + i, centerY, STRUCTURE_EXTENSION)
  }
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
