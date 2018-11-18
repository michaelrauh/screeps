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

module.exports = {harvest, deposit}
