<template>
  <div class="Note">
    <div class="row note bg-grey">
      <div class="col-3">{{noteData.creator.name}}</div>
      <div class="col-8">{{noteData.content}}</div>
      <div class="col-1">
        <span v-if="this.$store.state.profile.email == this.noteData.creator.email" @click="deleteNote" class="justify-self-end text-danger">&#10006;</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Note",
  props: ["noteData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteNote() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your note has been deleted.", "success");
          this.$store.dispatch('deleteNote', this.noteData)
        }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
span {
  opacity: 0;
}
.note:hover span {
  opacity: 1;
}
.note:hover {
  background-color: cyan;
}
</style>