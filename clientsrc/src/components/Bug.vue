<template>
  <div class="Bug">
    <div @click="viewDetails" class="row border-bottom border-dark text-center ">
      <div class="col-4 text-capitalize text-black">{{bugData.title}}</div>
      <div class="col-4">{{bugData.creator.name}}</div>
      <div v-if="!bugData.closed" class="text-danger col-1">Open</div>
      <div v-else class="text-success col-1">Closed</div>
      <div class="col-3">{{displayDate()}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bug",
  props: ['bugData', 'bugIndex'],
  data() {
    return {};
  },
  computed: {},
  methods: {
    displayDate() {
      let date = this.bugData.updatedAt.split('T')
      return date[0]
    },
    viewDetails() {
      this.$store.dispatch('getBug', this.bugData._id)
      this.$router.push({ name: 'BugDetails'})
    }
  },
  components: {}
};
</script>


<style scoped>
</style>