import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import VueChartJS from '@/components/VueChartJS'
import Information from '@/components/Information'
Vue.use(Router)

export default new Router({
  routes: [
      {
          path : '/',
          name : 'Board',
          component : Board
      },
      {
        path : '/VueChartJS',
        name : 'VueChartJS',
        component : VueChartJS
      },
      {
        path : '/Information',
        name : 'Information',
        component : Information
      },
  ]
})