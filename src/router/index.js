import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/messages.vue'
import Profile from '../pages/Profile.vue'

const routes = [
    { path : '/', component : Home, title: '홈', icon: 'fas fa-house fa-fw text-2xl' },
    { path : '/', component : Home, title: '탐색하기', icon: 'far fa-hashtag fa-fw text-2xl' },
    { path : '/notifications', component : Notifications, title: '알림', icon: 'far fa-bell fa-fw text-2xl' },
    { path : '/messages', component : Messages, title: '쪽지', icon: 'far fa-envelope fa-fw text-2xl' },
    { path : '/', component : Messages, title: '북마크', icon: 'fa-regular fa-fw fa-bookmark text-2xl' },
    { path : '/', component : Messages, title: '리스트', icon: 'far fa-list-alt fa-fw text-2xl' },
    { path : '/Profile', component : Profile , title: '프로필', icon: 'far fa-user fa-fw text-2xl'},
    { path : '/', component : Profile , title: '더보기', icon: 'fas fa-ellipsis-h fa-fw text-2xl'},
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router