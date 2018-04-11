import Vue from 'vue'
import Router from 'vue-router'
import EmitTest from '@/components/EmitTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmitTest',
      component: EmitTest
    }
  ]
})
