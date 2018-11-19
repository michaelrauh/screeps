const subject = require('./modes')
var td = require('testdouble')

var creep
var controller

beforeEach(() => {
  creep = td.object()
  controller = {fake: "controller"}
});

afterEach(() => {
  td.reset()
});

test('upgrade controller mode has a target of the passed in controller', () => {
  var result = subject.upgradeRoom(creep, controller)

  expect(result.target).toEqual(controller)
})

test('upgrade controller mode has an action that upgrades the controller', () => {
  var result = subject.upgradeRoom(creep, controller)

  result.action()

  td.verify(creep.upgradeController(controller))
})
