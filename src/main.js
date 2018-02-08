import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './views/App'
import VueBootstrap from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Todos os imports realizados nesse arquivos, são usados globalmente, como por exemplo:
import Nome do componente from './components/Componente'
Vue.component('como vai ser utilizado na tag', Nome dado pro componente)
*/
Vue.config.productionTip = false
Vue.use(VueBootstrap)
Vue.use(VueResource)

/**
 Criação de uma diretiva global para ser utilizados nos componentes
*/
Vue.directive('customFont', {
  bind (el, binding, vnode) {
    if (binding.value) {
      el.style.fontSize = binding.value + 'px'
    }
    el.style.color = 'red'
    el.style.fontFamily = 'Trebuchet MS'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
