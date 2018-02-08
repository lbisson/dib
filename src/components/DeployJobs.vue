<template>
  <div>
                          <div class="form-group">
                        <label for="app_name">Deployment Target URL</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=deployJob.deploy_target>
                    </div>
                    <div class="form-group">
                        <label for="deployjob">Add a deploy command</label>
                        <input
                                type="text"
                                id="deployjob"
                                class="form-control"
                                v-model=deployJob.deploy_command>
                    </div>
                    <button @click="addJob">Add Deployment Job</button>
                    <hr>
            <ul class="list-group">
            <li v-for="job in pipeline.app.pipeline.deploy_jobs">{{job.deploy_target}}  :  {{job.deploy_command}}
            </li>
        </ul>

    </div>
</template>
<script>
export default {
  data: function () {
    return {
      deployJob: {
        deploy_target: '',
        deploy_command: ''
      }
    }
  },
  props: ['pipeline'],
  methods: {
    addJob () {
      this.pipeline.app.pipeline.deploy_jobs.push(this.deployJob)
      // console.log(this.testJobs)
      this.deployJob = {}
    }
  }
}
</script>
