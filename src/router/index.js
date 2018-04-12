import Vue from 'vue'
import Router from 'vue-router'
import EmitTest from '@/components/EmitTest'
import VuexTest from '@/components/VuexTest'
import AxiosTest from '@/components/AxiosTest'

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
    },
    {
      path: '/axios',
      name: 'AxiosTest',
      component: AxiosTest
    }
  ]
})
