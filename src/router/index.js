import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../pages/home');
const Main = () => import('../pages/mint-music');
const AfterMint = () => import('../pages/after-mint');

const originalPush = Router.prototype.push;
Router.prototype.push = function replace(location) {
  return originalPush.call(this, location).catch(err => err);
};

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
    }, {
      path: '/minted',
      name: 'AfterMint',
      component: AfterMint
    }
  ]
})
