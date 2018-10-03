import Test from './src/main'

Test.install = function(Vue) {
  Vue.component(Test.name, Test)
}
export default Test
