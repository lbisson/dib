<template>
  <div>
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
      </div>
  </div>
</template>
<script>
export default {
  props: ['pipeline']
}
</script>
<style>

</style>
