<template>
  <div class="pipeline">
    <h1>{{ msg }}</h1>
    <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <hr>
                    <div class="form-group">
                        <label for="app_name">Pipeline Project Name</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=pipeline.app.app_name>
                    </div>
                    <div class="form-group">
                         <label>Docker Configuration:  <br></label>
                        
                        <label for="Single">
                            <input
                                    type="radio"
                                    id="single"
                                    value="DOCKER_RUN"
                                    v-model=pipeline.app.pipeline.app_type> Single Container
                        </label>
                        <label for="Multiple">
                            <input
                                    type="radio"
                                    id="multiple"
                                    value="DOCKER_COMPOSE"
                                    v-model=pipeline.app.pipeline.app_type> Multiple Containers
                        </label>   
                    </div>

                     <div class="form-group">
                         <label>Version Control:  <br></label>
                        
                        <label for="git">
                            <input
                                    type="radio"
                                    id="git"
                                    value="git"
                                    v-model=pipeline.app.pipeline.build_job.version_control.type> Git
                        </label>
                        <label for="github">
                            <input
                                    type="radio"
                                    id="github"
                                    value="github"
                                    v-model=pipeline.app.pipeline.build_job.version_control.type> GitHub
                        </label>   
                    </div>

                    <div class="form-group">
                        <label for="app_name">Version Control URL</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=pipeline.app.pipeline.build_job.version_control.url>
                    </div>

                    <div class="form-group">
                        <label for="app_name">Version Control Branch</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=pipeline.app.pipeline.build_job.version_control.branch>
                    </div>
                    

                     <div class="form-group">
                        <label for="app_name">Build Target</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=pipeline.app.pipeline.build_job.build_target>
                    </div>

                    <div class="form-group">
                        <label for="app_name">Delivery Target URL</label>
                        <input
                                type="text"
                                id="app_name"
                                class="form-control"
                                v-model=pipeline.app.pipeline.deploy_job.deploy_target>
                    </div>

                </div>
            </div>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <dib-test-jobs :pipeline="pipeline"></dib-test-jobs>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label>Requested Pipeline Stages: </label>
                    <label for="build">
                        <input
                                type="checkbox"
                                id="build"
                                value="Build"
                                v-model=stages> Build
                    </label>
                    <label for="test">
                        <input
                                type="checkbox"
                                id="test"
                                value="Test"
                                v-model=stages> Test
                    </label>
                    <label for="deliver">
                        <input
                                type="checkbox"
                                id="deliver"
                                value="Deliver"
                                v-model=stages> Deliver
                    </label>
                </div>
            </div>
           
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
  </div>
</template>

<script>
export default {
  name: 'Pipeline',
  data () {
    return {
      msg: 'Create a DevSecOps Pipeline',
      stages: []
    }
  },
  computed: {
    pipeline () {
      return this.$store.state.pipeline
    }
  },
  methods: {
    submitted () {
      this.$http.post('http://localhost:3000/pipelines', this.pipeline)
        .then(response => {
          console.log(response)
        }, error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
