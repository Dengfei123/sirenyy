import Vue from 'vue'
import Router from 'vue-router'
import Cinemas from './views/Cinemas.vue'
import Cinema from './views/Cinema.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Cinemas},
    {path: '/cinemas',component: Cinemas},
    {path: '/cinema',component: Cinema},
  ]
})
