import Vue from 'vue';
import Vuex from 'vuex';
import  {actions} from './actions';
import {mutations} from './mutations';
// import {mutations} from './getters';
Vue.use(Vuex);
const state={
    notes:[],
    activeNote:{}
};
// const mutations={
//     ADD_NOTE(state){
//         const newNote={
//             text:'NEW NOTE',
//             favorite:false
//         };
//         state.notes.push(newNote);
//         state.activeNote=newNote;
//     },
//     EDIT_NOTE(state,e){
//         state.activeNote.text=e.target.value;
//     },
//     DELETE_NOTE(state){
//         state.notes.shift(state.activeNote);
//         state.activeNote=state.notes.length>0?state.notes[0]:{};
//     },
//     TOGGLE_FAVORITE(state){
//         state.activeNote.favorite=!state.activeNote.favorite;
//     },
//     SET_ACTIVE_NOTE(state,note){
//         state.activeNote=note;
//     }
// };
// const actions={
//     ADD_NOTE({commit}){
//         commit('ADD_NOTE');
//     },
//     EDIT_NOTE({commit},text){
//         commit('EDIT_NOTE',text);
//     },
//     DELETE_NOTE({commit}){
//         commit('DELETE_NOTE');
//     },
//     TOGGLE_FAVORITE({commit}){
//         commit('TOGGLE_FAVORITE');
//     },
//     SET_ACTIVE_NOTE({commit},note){
//         commit('SET_ACTIVE_NOTE',note);
//     }
// };
const getters={
    GETTER_ActiveNote(state){
        return state.activeNote;   
        
    },
    GETTER_AllNote(state,e){
        return state.notes;
    },
    GETTER_CurrentNote(state){
        return state.activeNote;
    },
    GETTER_CuttentText(){
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
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});