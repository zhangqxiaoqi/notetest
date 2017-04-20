export const mutations={
    ADD_NOTE(state){
        const newNote={
            text:'NEW NOTE',
            favorite:false
        };
        state.notes.push(newNote);
        state.activeNote=newNote;
    },
    EDIT_NOTE(state,e){
        state.activeNote.text=e.target.value;
    },
    DELETE_NOTE(state){
        state.notes.shift(state.activeNote);
        state.activeNote=state.notes.length>0?state.notes[0]:{};
    },
    TOGGLE_FAVORITE(state){
        state.activeNote.favorite=!state.activeNote.favorite;
    },
    SET_ACTIVE_NOTE(state,note){
        state.activeNote=note;
    }
};