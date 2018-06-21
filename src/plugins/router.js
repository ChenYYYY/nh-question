import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      component: () => import('@/components/Main.vue')
    },
    {
      path: '/question/:order',
      component: () => import('@/components/Question.vue')
    }
  ]
})
