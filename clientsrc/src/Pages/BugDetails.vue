<template>
  <div class="BugDetails">
    <div class="container-fluid">
      <div class="row mt-5 justify-content-center">
        <div class="col-10 py-2 border border-info text-dark bg-light">
          <h5>Title:</h5>
          <h1 class="text-capitalize">{{activeBug.title}}</h1>
          <div class="row justify-content-between">
            <div class="col-6">
              <span>Creator Email : </span>
              <h4 class="inline text-capitalize">{{activeBug.creator.name}}</h4>
            </div>
            <div class="text-right mt-2 pr-5 col-6">
              <span>Status : </span>
              <div v-if="!activeBug.closed" class="inline text-danger"> Open</div>
              <div v-else class="inline text-success"> Closed</div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="bg-white border border-dark col-11">
              <p>{{activeBug.description}}</p>
            </div>
          </div>
          <div class="row justify-content-lg-center text-right">
            <div class="col-11">
              <button v-if="!activeBug.closed" @click="changeStatus" type="button" class="my-1 mr-n2 btn btn-danger">Close</button>
            </div>
          </div>
          <Notes :bugData="activeBug"></Notes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notes from '../components/Notes'
export default {
  name: "BugDetails",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('getBug', this.$route.params.bugId )
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    changeStatus() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert the bug status!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, change status!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Case Closed!", "Your bug status has been updated", "success");
          this.activeBug.closed = true;
          this.$store.dispatch('editBug', this.activeBug)
        }
      });
    }
  },
  components: {
    Notes
  }
};
</script>


<style scoped>
.inline {
  display: inline-block;
}
</style>