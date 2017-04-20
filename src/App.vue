<template>
<div class="note-box">
    <toolbar></toolbar>
    <notesList></notesList>
    <editor></editor>
</div>
</template>

<script>
import './assets/styles.css';
import Toolbar from './components/Toolbar';
import NotesList from './components/NotesList';
import Editor from './components/Editor';
export default {
    
  components:{
      Toolbar,
      NotesList,
      Editor
  }
}
</script>

<style>
.note-box{
    height: 100%;
}
</style>
