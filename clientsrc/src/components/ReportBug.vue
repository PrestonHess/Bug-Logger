<template>
  <div class="report-bug">
    <button
      type="button"
      v-if="$auth.isAuthenticated"
      class="btn btn-sm btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >Report Bug</button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Bug Report Form</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Title</span>
                </div>
                <input
                  required
                  type="text"
                  v-model="bug.title"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <small class="text-white">Description</small>
              <div class="input-group">
                <textarea rows="5" required class="form-control" v-model="bug.description" aria-label="With textarea"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" @click.prevent="reportBug" data-dismiss="modal" :to="{ name: 'BugDetails'}" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "report-bug",
  data() {
    return {
      bug: {}
    };
  },
  computed: {},
  methods: {
    reportBug() {
      this.$store.dispatch('createBug', this.bug)
      this.$router.push({ name: 'BugDetails'})
      this.bug = {}
    }
  },
  components: {}
};
</script>


<style scoped>
</style>