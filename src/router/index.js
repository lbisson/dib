import Vue from 'vue'
import Router from 'vue-router'
import Pipeline from '@/components/Pipeline'
import TestJobs from '@/components/TestJobs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pipeline',
      component: Pipeline },
    {
      path: '/test',
      name: 'TestJobs',
      component: TestJobs
    }
  ]
})
