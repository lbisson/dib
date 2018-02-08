<template>
  <div>
          <div class="form-group">
                         <label>Version Control:  <br></label>
                        
                        <label for="git">
                            <input
                                    type="radio"
                                    id="git"
                                    value="git"
                                    v-model=buildJob.version_control.type> Git
                        </label>
                        <label for="github">
                            <input
                                    type="radio"
                                    id="github"
                                    value="github"
                                    v-model=buildJob.version_control.type> GitHub
                        </label>   
                    </div>

                    <div class="form-group">
                        <label for="app_name">Version Control URL</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=buildJob.version_control.url>
                    </div>

                    <div class="form-group">
                        <label for="app_name">Version Control Branch</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=buildJob.version_control.branch>
                    </div>

                    <div class="form-group">
                        <label for="app_name">Build Target</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=buildJob.build_target>
                    </div>

                    <button @click="addJob">Add Build Job</button>

                    <hr>
                    <ul class="list-group">
            <li v-for="job in pipeline.app.pipeline.build_jobs">{{ job.version_control.type }} : {{job.version_control.url}} : {{job.version_control.branch}}
                : {{job.build_target}}
            </li>
        </ul>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      buildJob: {
        version_control: {
          type: '',
          url: '',
          branch: ''
        },
        build_target: ''
      }
    }
  },
  props: ['pipeline'],
  methods: {
    addJob () {
      this.pipeline.app.pipeline.build_jobs.push(this.buildJob)
      this.buildJob = {
        version_control: {}, build_target: ''
      }
    }
  }
}
</script>

