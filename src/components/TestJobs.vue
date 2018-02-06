<template>
  <div>
      <form>
      <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <hr>
                    <div class="form-group">
                        <label for="testjob">Add command for a Test Job</label>
                        <input
                                type="text"
                                id="testjob"
                                class="form-control"
                                v-model=testJob>
                    </div>
                    <button @click="addJob">Add Test Job</button>
            </div>
        </div>
        <hr>
      </form>
       <ul class="list-group">
            <li v-for="job in testJobs">{{ job }}</li>
        </ul>
  </div>

</template>

<script>
export default {
  data: function () {
    return {
      testJobs: ['hello', 'there'],
      testJob: ''
    }
  },
  methods: {
    addJob () {
      this.testJobs.push(this.testJob)
      // console.log(this.testJobs)
      this.testJob = ''
    }
  }
}
</script>

