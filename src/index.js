
import Button from '../packages/Button/index.js'
import Alert from '../packages/Alert/index.js'
const components = [
  Button,
  Alert,
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
}

export default all
export {
  install,
  Button,
  Alert,
}
