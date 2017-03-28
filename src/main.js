// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
// 引入store
import store from './store'

Vue.use(VueResource);
var vm = new Vue({
  el: '#app',
  store,
  template:'<App/>',
  components: { App }

});
