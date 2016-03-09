/*
 * Pattern.js
 * Contains rendering implementations for trianglify-generated geometry
 */
function Pattern(polys, opts) {
  // Return an object with all the relevant functions/properties attached to it
  return {
    polys: polys,
    opts: opts,
    svg: require('./render/svg').bind(null, polys, opts),
    canvas: require('./render/canvas').bind(null, polys, opts),
    png: require('./render/png').bind(null, polys, opts)
  };
}

module.exports = Pattern;
