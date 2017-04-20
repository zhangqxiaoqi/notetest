export const actions ={
    ADD_NOTE({commit}){
        commit('ADD_NOTE');
    },
    EDIT_NOTE({commit},text){
        commit('EDIT_NOTE',text);
    },
    DELETE_NOTE({commit}){
        commit('DELETE_NOTE');
    },
    TOGGLE_FAVORITE({commit}){
        commit('TOGGLE_FAVORITE');
    },
    SET_ACTIVE_NOTE({commit},note){
        commit('SET_ACTIVE_NOTE',note);
    }
};