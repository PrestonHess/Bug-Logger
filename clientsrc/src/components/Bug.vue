<template>
  <div class="Bug">
    <div class="row text-center text-capitalize">
      <div class="col-4 text-black">{{bugData.title}}</div>
      <div class="col-3">{{bugData.creator.name}}</div>
      <div v-if="!bugData.closed" class="text-danger col-1">Open</div>
      <div v-else class="text-success col-1">Closed</div>
      <div class="col-4">{{displayDate()}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Bug",
  props: ['bugData'],
  data() {
    return {};
  },
  computed: {},
  methods: {
    displayDate() {
      let date = this.bugData.updatedAt.split('T')
      return date[0]
    }
  },
  components: {}
};
</script>


<style scoped>
</style>