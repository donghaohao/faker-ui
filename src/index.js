
import Button from '../packages/Button/index.js'
import Alert from '../packages/Alert/index.js'
import Test from '../packages/Test/index.js'
import Test1 from '../packages/Test1/index.js'
import Ka from '../packages/Ka/index.js'
const components = [
  Button,
  Alert,
  Test,
  Test1,
  Ka,
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
  Button,
  Alert,
  Test,
  Test1,
  Ka,
}

export default all
export {
  install,
  Button,
  Alert,
  Test,
  Test1,
  Ka,
}
