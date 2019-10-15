/**
 * @param imports
 * @param installs
 * @param theme
 * @param prefix
 */
module.exports=`// Script Gen, Wanring: Edit template instead of it
import global from './global.js'
import '../examples/style/global-transition.css'
{{imports}}

let components = [
{{installs}}
]

const install = function(Vue){
  if (install.installed) return
  Vue.prototype.\${{prefix}}Global=global
  components.map(component => Vue.use(component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  {{installs}}
}
`