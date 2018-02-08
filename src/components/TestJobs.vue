<template>
  <div>
    <hr>
    <form>
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <label for="testtype">Select Test Type</label>
             <select id="testtype" v-model=testJob.test_type>
                <option value="UNIT_TEST">Unit</option>
                <option value="SMOKE_TEST">Smoke</option>
                <option value="INTEGRATION">Integration</option>                                <option value="INTEGRATION">Integration</option>
                <option value="VULNERABILITY_TEST">Vulnerability</option>
                <option value="CODE_QUALITY_TEST">Code Quality</option>
                <option value="MUTATION_TEST">Mutation</option>
                <option value="FUNCTIONAL_TEST">Functional</option>
                <option value="SECURITY_TEST">Security</option>

              </select>      
                    <div class="form-group">
                        <label for="testjob">Add command for a Test Job</label>
                        <input
                                type="text"
                                id="testjob"
                                class="form-control"
                                v-model=testJob.test_command>
                    </div>
                    <button @click="addJob">Add Test Job</button>
            </div>
        </div>
        <hr>
      </form>
       <ul class="list-group">
            <li v-for="job in pipeline.app.pipeline.test_jobs">{{ job.test_type }} : {{job.test_command}}</li>
        </ul>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      testJob: {
        test_type: 'UNIT_TEST',
        test_command: ''
      }
    }
  },
  props: ['pipeline'],
  methods: {
    addJob () {
      this.pipeline.app.pipeline.test_jobs.push(this.testJob)
      // console.log(this.testJobs)
      this.testJob = {}
    }
  }
}
</script>

