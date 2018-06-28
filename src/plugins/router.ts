import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/Main.vue')
    },
    {
      path: '/question',
      component: () => import('@/components/Question.vue')
    },
    {
      path: '/finish',
      component: () => import('@/components/Finish.vue')
    }
  ]
})
