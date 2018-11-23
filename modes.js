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

function build(creep, constructionSite) {
  return {
    target: constructionSite,
    action: function() {
      creep.build(constructionSite)
    }
  }
}

module.exports = { harvest, deposit, upgradeRoom, build }
