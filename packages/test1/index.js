import Test1 from './src/main'

Test1.install = function(Vue) {
  Vue.component(Test1.name, Test1)
}
export default Test1
