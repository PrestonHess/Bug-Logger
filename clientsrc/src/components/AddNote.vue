<template>
  <div class="Add-Note">
      <!-- <button type="button" class="">Add Note</button> -->
 


  <!-- Button trigger modal -->
<button type="button" class="my-1 mr-n2 btn btn-sm btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">
  Add Note
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-white" id="exampleModalLongTitle">{{activeBug.title}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-white">
        <form>
          <div class="form-group">
            <textarea class="form-control" v-model="note.content" rows="3"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" @click="createNote" data-dismiss="modal" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>


<script>
export default {
  name: "Add-Note",
  props: ['bugData'],
  data() {
    return {
      note: {

      }
    };
  },
  computed: {
    activeBug() {
      return this.$store.state.activeBug
    }
  },
  methods: {
    createNote() {
      this.note.bug = this.activeBug._id
      this.$store.dispatch('createNote', this.note)
      this.note = {}
    }
  },
  components: {}
};
</script>


<style scoped>
</style>