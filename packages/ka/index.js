import Ka from './src/main'

Ka.install = function(Vue) {
  Vue.component(Ka.name, Ka)
}
export default Ka
