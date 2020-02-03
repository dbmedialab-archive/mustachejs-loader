export default function(source) {
  return `var M = require('mustache');
module.exports = function(data = {}, partials = {}){
  return M.render(${JSON.stringify(source)}, data, partials);
}`
}
