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
          build_job: {
            version_control: {
              type: '',
              url: '',
              branch: ''
            },
            build_target: ''
          },
          deploy_job: {
            deploy_target: '',
            deploy_commands: ''
          },
          test_job: {
            test_type: '',
            test_command: ''
          }
        }
      }
    }
  }
})
