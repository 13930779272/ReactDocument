import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta:{yz:true},
    props:true,
    component: () => import('../views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) =>  {
  let mt = to.matched.
  console.log(mt)
  console.log('beforeEach')
  console.log(to,'去哪')
  console.log(from,'来自哪')
  next()
})
export default router
