module.exports = FullScreenQuad 

function FullScreenQuad ( dimensionality ) {
  switch ( dimensionality ) {
    case 4: return [
      1, 1, 0, 1,
      -1, 1, 0, 1,
      1, -1, 0, 1,
      -1, 1, 0, 1,
      -1, -1, 0, 1,
      1, -1, 0, 1
    ]
    case 3: return [
      1, 1, 0,
      -1, 1, 0,
      1, -1, 0,
      -1, 1, 0,
      -1, -1, 0,
      1, -1, 0
    ]
    case 2: 
    default: return [
      1, 1,
      -1, 1,
      1, -1,
      -1, 1,
      -1, -1,
      1, -1,
    ]
  }
}
