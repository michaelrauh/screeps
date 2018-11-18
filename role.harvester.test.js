const subject = require('./role.harvester')
var td = require('testdouble')

var creep

beforeEach(() => {
  global.FIND_SOURCES = 105
  global.ERR_NOT_IN_RANGE = -9
  global.RESOURCE_ENERGY = 'energy'

  creep = td.object()

  var find = td.function("find")
  var room = td.object()
  var moveTo = td.function("moveTo")

  room.find = find
  creep.room = room
  creep.moveTo = moveTo
  td.when(creep.room.find(FIND_SOURCES)).thenReturn([{pos: { x: 5, y: 17 }}])
});

afterEach(() => {
  td.reset()
});

test('moves toward the first source found if it is not adjacent', () => {
  creep.pos = {x: 1, y: 1}
  creep.carry.energy = 1
  creep.carryCapacity = 5

  subject.run(creep, null)

  td.verify(creep.moveTo(5, 17))
})

test('Does not move if it is adjacent to the source', () => {
  creep.pos = {x: 4, y: 17}
  creep.carry.energy = 1
  creep.carryCapacity = 5

  subject.run(creep, null)
  td.verify(creep.moveTo(), {times: 0, ignoreExtraArgs: true})
})

test('creep harvests from a source if it is adjacent', () => {
  creep.pos = {x: 4, y: 17}
  creep.carry.energy = 1
  creep.carryCapacity = 5

  subject.run(creep, null)
  td.verify(creep.harvest({pos: { x: 5, y: 17 }}))
})

test('moves toward the spawn if it is at capacity', () => {
  creep.pos = {x: 1, y: 1}
  creep.carry.energy = 5
  creep.carryCapacity = 5
  spawn = td.object()
  spawn.pos = {x: 27, y: 39}

  subject.run(creep, spawn)

  td.verify(creep.moveTo(27, 39))
})

test('transfers to the spawn if it is at capacity and in position', () => {
  creep.pos = {x: 26, y: 39}
  creep.carry.energy = 5
  creep.carryCapacity = 5
  var real = {pos: {x: 27, y: 39}}
  spawn = td.object(real)

  subject.run(creep, spawn)

  td.verify(creep.transfer(spawn, RESOURCE_ENERGY))
})
