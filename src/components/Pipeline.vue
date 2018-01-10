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
                        <label for="sourceRepo">Source Code Repository URL</label>
                        <input
                                type="text"
                                id="sourceRepo"
                                class="form-control"
                                v-model=sourceRepo>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="javascript">
                            <input
                                    type="checkbox"
                                    id="javascript"
                                    value="JavaScript"> Java Script
                        </label>
                        <label for="ruby">
                            <input
                                    type="checkbox"
                                    id="ruby"
                                    value="Ruby"> Ruby
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="build">
                        <input
                                type="radio"
                                id="build"
                                value="build"> Build
                    </label>
                    <label for="test">
                        <input
                                type="radio"
                                id="test"
                                value="test"> Test
                    </label>
                    <label for="deliver">
                        <input
                                type="radio"
                                id="deliver"
                                value="deliver"> Deliver
                    </label>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Pipeline Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Pipeline Project Name: {{projectName}}</p>
                        <p>Source Code Repository: {{sourceRepo}}</p>
                        <p>Language(s):</p>
                        <p>Stage(s): </p>
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
      sourceRepo: ''
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
