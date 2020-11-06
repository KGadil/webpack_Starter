// JS
import './js/'

// CSS
import './assets/css/app.base.css'
import './assets/css/app.components.css'
import './assets/css/app.utilities.css'

// Vue.js
window.Vue = require('vue')

// Vue Components (For Use In Html)
Vue.component('example-component', require('./js/components/Example.vue').default)

// Vue Init
const app = new Vue({
  el: '#app'
})
