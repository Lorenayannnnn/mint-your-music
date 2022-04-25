import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Axios from "./config/axios";
import locale from 'element-ui/lib/locale/lang/en'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

import {Message} from "element-ui";

Vue.config.productionTip = false

Vue.prototype.$axios = Axios
Vue.prototype.$message = Message;

Vue.use(ElementUI, { locale })
Vue.use(Vuesax, {
  primary: "#6C63FF"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
