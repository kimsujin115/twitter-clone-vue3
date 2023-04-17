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
        },
        SET_BACKGROUND_IMAGE : (state, image) => {
            state.user.background_img_url = image
        },
        SET_PROFILE_IMAGE : (state, image) => {
            state.user.profile_img_url = image
        },
        SET_FOLLOW : (state, uid) => {
            state.user.followings.push(uid)
        },
        SET_UN_FOLLOW : (state, uid) => {
            state.user.followings = state.user.followings.filter((u) => u != uid)
        },
    },
    plugins: [createPersistedState()],
})


export default store