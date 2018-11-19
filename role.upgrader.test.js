var td = require('testdouble')
require('testdouble-jest')(td, jest)

var modes = td.replace("./modes")
var util = td.replace("./util")
var subject = require('./role.upgrader')

var creep
var spawn
var roomController
var source
var harvestMode
var upgradeMode

beforeEach(() => {
  global.RESOURCE_ENERGY = 'energy'
  global.FIND_SOURCES = 105

  spawn = {}
  roomController = {}
  creep = {carryCapacity: 12, memory: {bias: "harvest"}, carry: {energy: null}, room: {controller: roomController, find: td.function("find")}}
  source = {pos: { x: 5, y: 17 }}
  harvestMode = {harvest: "mode"}
  td.when(creep.room.find(FIND_SOURCES)).thenReturn([source])
  td.when(modes.harvest(source, creep)).thenReturn(harvestMode)

  upgradeMode = {upgrade: "mode"}
  td.when(modes.upgradeRoom(creep, roomController)).thenReturn(upgradeMode)
});

afterEach(() => {
  td.reset()
});

test('approaches and acts with harvest mode when bias is harvest', () => {
  creep.carry.energy = 0
  subject.run(creep, spawn)

  td.verify(util.approachAndAct(creep, harvestMode))
})

test('approaches and acts with upgrade mode when bias is upgrade', () => {
  creep.carry.energy = 12
  creep.memory.bias = "upgrade"

  subject.run(creep, spawn)

  td.verify(util.approachAndAct(creep, upgradeMode))
})

test('changes bias to upgrade when energy is full', () => {
  creep.carry.energy = 12

  creep.memory.bias = "harvest"

  subject.run(creep, spawn)

  expect(creep.memory.bias).toEqual("upgrade")
})

test('changes bias to harvest when energy is empty', () => {
  creep.carry.energy = 0
  creep.carryCapacity = 12

  creep.memory.bias = "upgrade"

  subject.run(creep, spawn)

  expect(creep.memory.bias).toEqual("harvest")
})
