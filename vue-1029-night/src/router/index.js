import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Baby from '@/components/Baby.vue'
import Coments from '@/components/Coments.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Detail/:id',
    name: 'Detail',
    component: Detail,
  	children:[
  		{
  			path:"baby",
  			name:"baby",
  			component:Baby
  		},
  		{
  			path:"coments",
  			name:"coments",
  			component:Coments
  		}
  	]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
