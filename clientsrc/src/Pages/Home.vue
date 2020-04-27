<template>
  <div class="home container-fluid">
    <div class="row mt-4 justify-content-center">
      <div class="col-10 border">
        <div class="row text-uppercase text-center bg-secondary py-1">
          <div class="col-4">Title</div>
          <div class="col-3">Reported By</div>
          <div class="col-1">Status</div>
          <div class="col-4">Last Modified</div>
        </div>
          <Bug v-for="bug in bugs" :bugData="bug" :key="bug._id" ></Bug>
      </div>
    </div>
  </div>
</template>

<script>
import Bug from "../components/Bug"
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('getBugs')
  },
  computed: {
    bugs() {
      return this.$store.state.bugs
    }
  },
  methods: {},
  components: {
    Bug
  }
};
</script>

<style scoped>
.bug-header{
  font-size: 4rem;
}
</style>