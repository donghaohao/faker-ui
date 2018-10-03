// 新建组件
if (!process.argv[2]) {
  console.error('请输入组件名')
  process.exit(1)
}

const name = process.argv[2]
const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')

const componentName = uppercamelcase(name)
const packagePath = path.resolve(__dirname, '../packages', name)

// 写模板
const files = [{
  filename: 'index.js',
  content: `import ${componentName} from './src/main'

${componentName}.install = function(Vue) {
  Vue.component(${componentName}.name, ${componentName})
}
export default ${componentName}`
}, {
  filename: 'src/main.vue',
  content: `<template>
  <div class="h-${name}"></div>
</template>
<script>
export default {
  name: 'H${componentName}'
}
</script>
<style module>
</style>`
}, {
  filename: path.join('../../examples', `${name}`, 'App.vue'),
  content: `<template>
  <div></div>
</template>
<script>
import ${componentName} from '../../packages/${name}'
export default {
  components: { ${componentName} }
}
</script>
<style>
</style>`
}]

const componentsFile = require('../components.json')
if (componentsFile[name]) {
  console.error(`${name} 已存在.`)
  process.exit(1)
}

componentsFile[name] = `./packages/${name}/index.js`
fileSave(path.join(__dirname, '../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n')

files.forEach(file => {
  fileSave(path.join(packagePath, file.filename))
  .write(file.content, 'utf8')
  .end('\n')
})

console.log('组件已创建~')
