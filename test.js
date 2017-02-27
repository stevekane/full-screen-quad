var test = require('tape')
var FSQ = require('./index')

test('construction', function (t) {
  var fsqdefault = FSQ()
  var fsq2d = FSQ(2)
  var fsq3d = FSQ(3)
  var fsq4d = FSQ(4)

  t.same(fsqdefault, [
    1, 1,
    -1, 1,
    1, -1,
    -1, 1,
    -1, -1,
    1, -1,
  ])
  t.same(fsq2d, [
    1, 1,
    -1, 1,
    1, -1,
    -1, 1,
    -1, -1,
    1, -1,
  ])
  t.same(fsq3d, [
    1, 1, 0,
    -1, 1, 0,
    1, -1, 0,
    -1, 1, 0,
    -1, -1, 0,
    1, -1, 0
  ])
  t.same(fsq4d, [
    1, 1, 0, 1,
    -1, 1, 0, 1,
    1, -1, 0, 1,
    -1, 1, 0, 1,
    -1, -1, 0, 1,
    1, -1, 0, 1
  ])
  t.end()
})
