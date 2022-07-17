import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      index: 1
    }
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () =>
      import(/* webpackChunkName: "classify" */ '@/views/Classify.vue'),
    meta: {
      index: 2
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
