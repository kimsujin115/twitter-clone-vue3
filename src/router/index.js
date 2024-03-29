import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/messages.vue'
import Profile from '../pages/Profile.vue'
import Register from '../pages/Register.vue'
import Tweet from '../pages/Tweet.vue'
import Login from '../pages/Login.vue'
import store from "../store";

const routes = [
    { path : '/', name:'home', component : Home, title: '홈', icon: 'fas fa-house fa-fw text-2xl' , meta: { isMenu : true, layout : 'DefaultLayout', requireAuth:true } },
    { path : '/', name:'explore', component : Home, title: '탐색하기', icon: 'far fa-hashtag fa-fw text-2xl', meta: { isMenu : true, layout : 'DefaultLayout', requireAuth:true}},
    { path : '/notifications', name:'notification', component : Notifications, title: '알림', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu : true, layout : 'DefaultLayout', requireAuth:true}},
    { path : '/messages', name:'messages', component : Messages, title: '쪽지', icon: 'far fa-envelope fa-fw text-2xl', meta: { isMenu : true, layout : 'DefaultLayout', requireAuth:true}},
    { path : '/', name:'bookmarks', component : Home, title: '북마크', icon: 'fa-regular fa-fw fa-bookmark text-2xl', meta: { isMenu : true, layout : 'DefaultLayout', requireAuth:true}},
    { path : '/', name:'list', component : Home, title: '리스트', icon: 'far fa-list-alt fa-fw text-2xl', meta: { isMenu : true, layout : 'DefaultLayout', requireAuth:true}},
    { path : '/profile', name:'profile', component : Profile , title: '프로필', icon: 'far fa-user fa-fw text-2xl', meta: { isMenu : true, layout : 'DefaultLayout', requireAuth:true}},
    { path : '/profile/:uid', component : Profile, meta: { isMenu : false, layout : 'DefaultLayout', requireAuth:true}},
    { path : '/', name:'more', component : Profile , title: '더보기', icon: 'fas fa-ellipsis-h fa-fw text-2xl', meta: { isMenu : true, layout : 'DefaultLayout', requireAuth:true}},
    { path : '/tweet/:id', name:'tweet', component : Tweet , meta: { isMenu : false, layout : 'DefaultLayout', requireAuth:true}}, //트윗페이지
    { path : '/register', name:'register', component : Register , meta: { isMenu : false, layout : 'EmptyLayout'}},
    { path : '/login', name:'login', component : Login , meta: { isMenu : false, layout : 'EmptyLayout'}},
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})


//navigation guard
router.beforeEach((to, from, next) => {
    console.log(to.matched)
    const currentUser = store.state.user //현재 유저정보
    const requireAuth = to.matched.some((record) => record.meta.requireAuth) //to.matched 배열 안에 하나라도 속한게 있으면 반환
    
    //not authenticated (requireAuth이고, 현재 유저정보가 없다면 로그인 페이지로 이동)
    if ( requireAuth && !currentUser) next('/login') 
    // authenticated (인증정보가 필요 없는 페이지일 경우 다음 라우팅 계속 이어감)
    else next()

})

export default router