
const components = require('../components.json')
const fs = require('fs')
const path = require('path')
const uppercamelcase = require('uppercamelcase')

const names = Object.keys(components).map(name => uppercamelcase(name))
let importContent = names.map(name => {
  return `import ${name} from '../packages/${name}/index.js'`
}).join('\n')

let installContent = names.join(',\n  ')
const content = `
${importContent}
const components = [
  ${installContent},
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const all = {
  install,
  ${installContent},
}

export default all
export {
  install,
  ${installContent},
}
`
fs.writeFileSync(path.join(__dirname,'../src/index.js'), content)
