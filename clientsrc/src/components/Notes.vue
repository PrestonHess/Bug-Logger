<template>
  <div class="Notes">
    <div class="row my-2">
      <div class="col-2 align offset-1">
        <h5>Notes</h5>
      </div>
      <div class="border border-dark offset-1 col-10">
        <div class="row bg-info">
          <div class="col-3">Name</div>
          <div class="col-9">Message</div>
        </div>
          <Note v-for="note in notes" :noteData="note" :key='note._id'></Note>
      </div>
      <div class="col-11 text-right">
        <AddNote></AddNote>
      </div>
    </div>
  </div>
</template>


<script>
import AddNote from "../components/AddNote";
import Note from "../components/Note";
export default {
  name: "Notes",
  props: ['bugData'],
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('getNotes', this.bugData._id)
  },
  computed: {
    notes() {
      return this.$store.state.notes
    }
  },
  methods: {},
  components: {
    AddNote,
    Note
  }
};
</script>


<style scoped>
.bg-grey {
  background-color: #e6e6e6;
}
</style>