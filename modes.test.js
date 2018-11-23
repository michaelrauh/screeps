const subject = require('./modes')
var td = require('testdouble')

var creep
var controller
var constructionSite

beforeEach(() => {
  creep = td.object()
  controller = {fake: "controller"}
  constructionSite = {fake: "constructionSite"}
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

test('build mode has a target of the passed in construction site', () => {
  var result = subject.build(creep, constructionSite)

  expect(result.target).toEqual(constructionSite)
});

test('build mode has an action that tells the creep to build the construction site', () => {
  var result = subject.build(creep, constructionSite)

  result.action()

  td.verify(creep.build(constructionSite))
});
