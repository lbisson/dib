import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pipeline: {
      jenkins_version: '',
      app: {
        app_name: '',
        pipeline: {
          app_type: '',
          build_jobs: [],
          deploy_jobs: [],
          test_jobs: []
        }
      }
    }
  }
})
