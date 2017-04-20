export const getters={
    GETTER_ActiveNote(state){
        return state.activeNote;
    },
    GETTER_AllNote(state,e){
        return state.notes;
    },
    GETTER_CurrentNote(state){
        return state.activeNote;
    },
    GETTER_CuttentText(state){
        return state.activeNote.text;
    },
    GETTER_FilterNote(state){
        let array=new Array();
        for(let item in state.notes){
            if(item.favorite){
                array.push(item);
            }
            
        }
    }
};