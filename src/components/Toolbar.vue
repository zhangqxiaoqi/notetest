<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex';
export default {
 
  data(){
    return {
    }
  },
  methods:mapActions(
    {addNote:'ADD_NOTE',toggleFavorite:'TOGGLE_FAVORITE',deleteNote:'DELETE_NOTE'}
    ),
  computed:mapGetters(
    {activeNote:'GETTER_ActiveNote'}
  )
}
</script>
