import Vue from 'vue'
import Router from 'vue-router'
import modules from '@/router/moduleLoader'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: modules
})

export { router as default }