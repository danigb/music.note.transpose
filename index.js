var notation = require('music.notation')
var op = require('music.pitch.operator')

/**
 * Transposes a pitch by an interval
 *
 * This function is curryfied, so you can partially applied (see example)
 *
 * @param {String|Array} a - a pitch or interval in string or array notation
 * @param {String|Array} b - a pitch or interval in string or array notation
 * @return {String|Array} the transposed pitch
 *
 * @example
 * transpose('3m', 'C4') // => 'Eb4'
 * transpose('C4', '3m') // => 'Eb4'
 * tranpose([1, 0, 2], [3, -1, 0]) // => [3, 0, 2]
 * ['C', 'D', 'E'].map(transpose('3M')) // => ['E', 'F#', 'G#']
 */
function transpose (interval, pitch) {
  if (arguments.length === 1) return function (p) { return transpose(interval, p) }
  var i = notation.arr(interval)
  var p = notation.arr(pitch)
  if (!i || !p) return null
  var r = p.length === 3 ? op.add(p, i) : op.add(i, p)
  return Array.isArray(pitch) ? r : notation.str(r)
}

module.exports = transpose
