export default function(source) {
  let template = source
  let partials = {}

  if (typeof source === 'object') {
    template = source.template
    partials = source.partials
  }

  return `var M = require('mustache');
module.exports = function(data = {}, partials = ${JSON.stringify(partials)}){
  return M.render(${JSON.stringify(template)}, data, partials);
}
module.exports.templateString = ${JSON.stringify(template)};
`
}
