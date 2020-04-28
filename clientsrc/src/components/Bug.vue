<template>
  <div class="Bug">
    <div v-if="displayOpen && !this.bugData.closed || !displayOpen" @click="viewDetails" class="row bug-bg border-bottom border-dark text-center">
      <div class="col-4 text-capitalize text-black">{{bugData.title}}</div>
      <div class="col-4">{{bugData.creator.name}}</div>
      <div v-if="!bugData.closed" class="text-danger col-1">Open</div>
      <div v-else class="text-success col-1">Closed</div>
      <div class="col-3">{{displayDate()}}</div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ['bugData', 'bugIndex', 'displayOpen'],
  data() {
    return {
      
    };
  },
  computed: {},
  methods: {
    displayDate() {
      let date = this.bugData.updatedAt.split('T')
      return date[0]
    },
    viewDetails() {
      if (this.$auth.isAuthenticated) {
        this.$store.commit('setNotes', [])
        this.$store.commit('setActiveBug', {})
        this.$store.dispatch('getBug', this.bugData._id)
        this.$router.push({ name: 'BugDetails', params: { bugId: this.bugData._id }})
      }
    }
  },
  components: {}
};
</script>


<style scoped>
.bug-bg:hover{
  background-color: #abb6c2;
}
</style>