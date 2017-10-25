import Vue from 'vue'
import Router from 'vue-router'
import Bookmarker from '@/components/Bookmarker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Bookmarker',
      component: Bookmarker
    }
  ]
})
