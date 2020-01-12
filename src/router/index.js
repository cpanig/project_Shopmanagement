import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../components/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
