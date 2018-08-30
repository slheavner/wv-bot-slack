exports.matches = [
  'wvu',
  'west virginia',
  'country roads',
  'take me home',
  'to the place',
  'i belong',
  'mountain momma',
  'blue ridge mountains',
  'blueridge mountains',
  'wv',
  'mountaineers',
  'eers',
]

exports.check = text => {
  if (!text) return false
  const lower = text.toLowerCase()
  return exports.matches.reduce((prev, val) => lower.includes(val) || prev, false)
}

exports.checks = textList => {
  return !!textList.find(val => exports.check(val))
}
