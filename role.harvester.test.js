const subject = require('./role.harvester')
var td = require('testdouble')

test('moves toward the first source found', () => {
  global.FIND_SOURCES = 105
  global.ERR_NOT_IN_RANGE = -9
  global.RESOURCE_ENERGY = 'energy'

  expect(true).toEqual(true)

  var find = td.function("find")
  var room = td.object()
  var creep = td.object()
  var moveTo = td.function("moveTo")

  room.find = find
  creep.room = room
  creep.moveTo = moveTo
  td.when(creep.room.find(FIND_SOURCES)).thenReturn(["source"])

  subject.run(creep, null)

  td.verify(creep.moveTo("source"))
})
