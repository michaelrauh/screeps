var td = require('testdouble')
require('testdouble-jest')(td, jest)

var modes = td.replace("./modes")
var util = td.replace("./util")
var subject = require('./role.builder')

var creep
var source
var harvestMode
var buildMode
var constructionSite

beforeEach(() => {
  global.RESOURCE_ENERGY = 'energy'
  global.FIND_SOURCES = 105
  global.FIND_CONSTRUCTION_SITES = 108

  creep = {carryCapacity: 12, memory: {bias: "harvest"}, carry: {energy: null}, room: {find: td.function("find")}}
  
  source = {pos: { x: 4, y: 12 }}
  harvestMode = {harvest: "mode"}
  td.when(creep.room.find(FIND_SOURCES)).thenReturn([source])
  td.when(modes.harvest(source, creep)).thenReturn(harvestMode)


  constructionSite = {construction: "site"}
  buildMode = {build: "mode"}
  td.when(creep.room.find(FIND_CONSTRUCTION_SITES)).thenReturn([constructionSite])
  td.when(modes.build(creep, constructionSite)).thenReturn(buildMode)
});

afterEach(() => {
  td.reset()
});

test('approaches and acts with harvest mode when bias is harvest', () => {
  creep.carry.energy = 0
  subject.run(creep)

  td.verify(util.approachAndAct(creep, harvestMode))
})

test('approaches and acts with build mode when bias is build', () => {
  creep.carry.energy = 12
  creep.memory.bias = "build"

  subject.run(creep)

  td.verify(util.approachAndAct(creep, buildMode))
})

test('changes bias to build when energy is full', () => {
  creep.carry.energy = 12

  creep.memory.bias = "harvest"

  subject.run(creep)

  expect(creep.memory.bias).toEqual("build")
})

test('changes bias to harvest when energy is empty', () => {
  creep.carry.energy = 0
  creep.carryCapacity = 12

  creep.memory.bias = "build"

  subject.run(creep)

  expect(creep.memory.bias).toEqual("harvest")
})
