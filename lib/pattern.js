/*
 * Pattern.js
 * Contains rendering implementations for trianglify-generated geometry
 */
function Pattern(polys, opts) {
  this.polys = polys;
  this.opts = opts;
}

Pattern.prototype.render = function(renderFn) {
  return renderFn(this.polys, this.opts);
};

Pattern.prototype.canvas = function(canvas) {
  var canvas_fn = require('./render/canvas');
  return canvas_fn(this.polys, this.opts, canvas);
};

Pattern.prototype.png = function(canvas) {
  var png_fn = require('./render/png');
  return png_fn(this.polys, this.opts, canvas);
};

Pattern.prototype.svg = function(svgOpts) {
  var svg_fn = require('./render/svg');
  return svg_fn(this.polys, this.opts, svgOpts);
};

module.exports = Pattern;
