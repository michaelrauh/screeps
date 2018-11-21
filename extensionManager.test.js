const subject = require("./extensionManager")

var td = require('testdouble')

var spawn
var room

beforeEach(() => {
  global.FIND_SOURCES = 105
  global.ERR_NOT_IN_RANGE = -9
  global.RESOURCE_ENERGY = 'energy'
  global.STRUCTURE_EXTENSION = "extension"

  spawn = {}
  room = {}
  room.controller = {}
  room.createConstructionSite = td.func()
  spawn.pos = {x: 100, y: 100, room: "notRelevant"}
});

afterEach(() => {
  td.reset()
});

test('does nothing at controller level 1', () => {
  room.controller.level = 1
  subject.run(spawn, room)

  td.verify(room.createConstructionSite(), {times: 0, ignoreExtraArgs: true})
});

test('creates 5 construction sites in a row south of the spawn when the controller level is 2', () => {
  room.controller.level = 2
  subject.run(spawn, room)

  td.verify(room.createConstructionSite(96, 98, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(98, 98, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(100, 98, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(102, 98, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(104, 98, STRUCTURE_EXTENSION))
});

test('creates 5 construction sites in a row south of the spawn when the controller level is 3', () => {
  room.controller.level = 3
  subject.run(spawn, room)

  td.verify(room.createConstructionSite(96, 96, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(98, 96, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(100, 96, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(102, 96, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(104, 96, STRUCTURE_EXTENSION))
});

test('creates 10 construction sites in a row south of the spawn when the controller level is 4', () => {
  room.controller.level = 4
  subject.run(spawn, room)

  td.verify(room.createConstructionSite(91, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(93, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(95, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(97, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(99, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(101, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(103, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(105, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(107, 94, STRUCTURE_EXTENSION))
  td.verify(room.createConstructionSite(109, 94, STRUCTURE_EXTENSION))
});

// 1:0
// 2:5
// 3:10
// 4:20
// 5:30
// 6:40
// 7:50
// 8:60
