<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex';
    export default{
        data(){
            return {}
        },
        computed:mapGetters({
            activeNoteText:'GETTER_CuttentText'
        }),
        methods:mapActions({
            editNote:'EDIT_NOTE'
        })
        
    }

</script>