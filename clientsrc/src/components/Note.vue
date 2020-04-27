<template>
  <div class="Note">
    <div class="row bg-grey">
      <div class="col-3">{{noteData.creator.name}}</div>
      <div class="col-9">{{noteData.content}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Note",
  props: ['noteData'],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>