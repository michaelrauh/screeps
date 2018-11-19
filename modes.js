function harvest(source, creep) {
  return {
    target: source,
    action: function() {
      creep.harvest(source)
    }
  }
}

function deposit(creep, spawn) {
  return {
    target: spawn,
    action: function() {
      creep.transfer(spawn, RESOURCE_ENERGY)
    }
  }
}

function upgradeRoom(creep, roomController) {
  return {
    target: roomController,
    action: function() {
      creep.upgradeController(roomController)
    }
  }
}

module.exports = { harvest, deposit, upgradeRoom }
