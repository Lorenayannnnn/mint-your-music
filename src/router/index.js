import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../pages/home');
const Main = () => import('../pages/mint-music');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
