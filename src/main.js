import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import VueCarousel from 'vue-carousel';
// import _ from 'lodash';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
