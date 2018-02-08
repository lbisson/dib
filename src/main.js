// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import {store} from './store/store'
import TestJobs from './components/TestJobs'
import BuildJobs from './components/BuildJobs'
import ProjectConfig from './components/ProjectConfig'
import DeployJobs from './components/DeployJobs'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.component('dib-test-jobs', TestJobs)
Vue.component('dib-build-jobs', BuildJobs)
Vue.component('dib-project-config', ProjectConfig)
Vue.component('dib-deploy-jobs', DeployJobs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
