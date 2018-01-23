<template>
  <div class="pipeline">
    <h1>{{ msg }}</h1>
    <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <hr>
                    <div class="form-group">
                        <label for="projectName">Pipeline Project Name</label>
                        <input
                                type="text"
                                id="projectName"
                                class="form-control"
                                v-model=projectName>
                    </div>
                    <div class="form-group">
                         <label>Docker Configuration:  <br></label>
                        
                        <label for="Single">
                            <input
                                    type="radio"
                                    id="single"
                                    value="Single"
                                    v-model=dockerConfig> Single Container
                        </label>
                        <label for="Multiple">
                            <input
                                    type="radio"
                                    id="multiple"
                                    value="Multiple"
                                    v-model=dockerConfig> Multiple Containers
                        </label>
    
                        
                </div>
                 
                    <div class="form-group">
                         <label>Repository Type:  <br></label>
                        
                        <label for="Git">
                            <input
                                    type="radio"
                                    id="git"
                                    value="Git"
                                    v-model=sourceRepo> Git
                        </label>
    
                        <label for="GitHub">
                            <input
                                    type="radio"
                                    id="github"
                                    value="GitHub"
                                    v-model=sourceRepo> GitHub
                        </label>
                        <label for="Subversion">
                            <input
                                    type="radio"
                                    id="subversion"
                                    value="Subversion"
                                    v-model=sourceRepo> Subversion
                        </label>
                        <label for="Bitbucket">
                            <input
                                    type="radio"
                                    id="bitbucket"
                                    value="Bitbucket"
                                    v-model=sourceRepo> Bitbucket
                        </label>
                </div>
                <div class="form-group">
                        <label for="sourceRepoURL">Source Code Repository URL</label>
                        <input
                                type="text"
                                id="sourceRepoURL"
                                class="form-control"
                                v-model=sourceRepoURL>
                    </div>

                </div>
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
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                        <label for="deploymentURL">Deployment URL</label>
                        <input
                                type="text"
                                id="deploymentURL"
                                class="form-control"
                                v-model=deploymentURL>
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
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Pipeline Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Pipeline Project Name: {{projectName}}</p>
                        <p>Docker Configuration: {{dockerConfig}}</p>
                        <p>Repository: {{sourceRepo}}</p>
                        <p>Source Code Repository: {{sourceRepoURL}}</p>
                       <ul>Requested Pipeline Stages
                           <li v-for="stage in stages">{{stage}}</li>
                       </ul>
                       <p>Deployment URL: {{deploymentURL}}</p>
                    </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
export default {
  name: 'Pipeline',
  data () {
    return {
      msg: 'Create a DevSecOps Pipeline',
      projectName: '',
      sourceRepo: '',
      sourceRepoURL: '',
      dockerConfig: '',
      stages: [],
      deploymentURL: '',
      isSubmitted: false
    }
  },
  methods: {
    submitted () {
      this.isSubmitted = true
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
