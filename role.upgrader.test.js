var td = require('testdouble')
require('testdouble-jest')(td, jest)

var modes = td.replace("./modes")
var util = td.replace("./util")
var subject = require('./role.upgrader')

var creep
var spawn
var roomController
var source

beforeEach(() => {
  global.RESOURCE_ENERGY = 'energy'
  global.FIND_SOURCES = 105

  spawn = {}
  roomController = {}
  creep = {carry: {energy: null}, room: {controller: roomController, find: td.function("find")}}
  source = {pos: { x: 5, y: 17 }}
});

afterEach(() => {
  td.reset()
});

test('approaches and acts with harvest mode when carrying less than max energy', () => {
  var harvestMode = {harvest: "mode"}
  creep.carry.energy = 2
  creep.carryCapacity = 7

  td.when(creep.room.find(FIND_SOURCES)).thenReturn([source])
  td.when(modes.harvest(source, creep)).thenReturn(harvestMode)

  subject.run(creep, spawn)

  td.verify(util.approachAndAct(creep, harvestMode))
})

test('approaches and acts with upgrade mode when carrying max energy', () => {
  var upgradeMode = {upgrade: "mode"}
  td.when(modes.upgradeRoom(creep, roomController)).thenReturn(upgradeMode)
  creep.carry.energy = 12
  creep.carryCapacity = 12

  subject.run(creep, spawn)

  td.verify(util.approachAndAct(creep, upgradeMode))
})
