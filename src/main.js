import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import vuex_store from './store'
Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(Vuex);


new Vue({
  router,
  store:vuex_store(Vuex),
  render: h => h(App),
}).$mount('#app')

