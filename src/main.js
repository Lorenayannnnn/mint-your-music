import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Axios from "./config/axios";
import locale from 'element-ui/lib/locale/lang/en'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.use(ElementUI, { locale })
Vue.use(Vuesax, {
  // options here
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
