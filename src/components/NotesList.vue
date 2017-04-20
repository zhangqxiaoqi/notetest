<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  data () {
    return {
      show: 'all'
    }
  },
  computed:{...mapGetters ({
    notes:'GETTER_AllNote',
    activeNote:'GETTER_CurrentNote'
  }),
    filteredNotes(){
      if(this.show==='all'){
        return this.notes;
      }else{
        return this.notes.filter(note=>note.favorite);
      }
    }
},
  methods:mapActions({updateActiveNote:'SET_ACTIVE_NOTE'})
}
</script>