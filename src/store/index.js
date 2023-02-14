import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state() {
        return {
            user : null //유저의 초기값
        }
    },
    mutations : { //이렇게 바뀔거다라고 셋팅해주는거야
        SET_USER : (state, user) => {
            state.user = user
        }
    },
    plugins: [createPersistedState()],
})


export default store