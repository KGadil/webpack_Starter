// JS
import './js/'

// CSS
import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue Components (for use in html)
Vue.component('example-component', require('./js/components/Example.vue').default)

// Vue Init
const app = new Vue({
  el: '#app'
})
