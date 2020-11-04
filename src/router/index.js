import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing'
import About from '../views/About'
import Projects from '../views/Projects'
import Uses from '../views/Uses'
import Contact from '../views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/uses',
    name: 'Uses',
    component: Uses
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
