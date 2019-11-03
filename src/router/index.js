import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
        index: 0
      }
  },
  {
    path: '/webChat',
    name: 'webChat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/webChat.vue'),
    meta: {
        index: 1
      }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
