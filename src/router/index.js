import Vue from 'vue'
import Router from 'vue-router'
import EmitTest from '@/components/EmitTest'
import VuexTest from '@/components/VuexTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmitTest',
      component: EmitTest
    },
    {
      path: '/vuex',
      name: 'VuexTest',
      component: VuexTest
    }
  ]
})
