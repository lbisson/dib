<template>
  <div class="pipeline">
    <h1>{{ msg }}</h1>
    <form>
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
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                
              <div >
                  <dib-project-config :pipeline="pipeline"></dib-project-config>
              </div>
                 <div>
                  <dib-build-jobs :pipeline="pipeline"></dib-build-jobs>
                </div>

                <div>
                  <dib-test-jobs :pipeline="pipeline"></dib-test-jobs>
                </div>
            <div>
                <dib-deploy-jobs :pipeline="pipeline"></dib-deploy-jobs>
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
