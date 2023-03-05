<template>
    <div class="flex h-screen container mx-auto relative">
      <!-- side section -->
      <div class="w-20 xl:w-1/4 py-5 px-5 flex flex-col justify-between border-r border-gray-100">
        <div class="flex flex-col items-center xl:items-start">
          <!-- twitter logo -->
          <i class="fa-brands fa-twitter text-3xl text-primary lg:ml-4"></i>
          <!-- sidemenu icons -->
          <nav class="mt-3">
            <div class="flex flex-col items-start">
              <router-link :to="route.path" :class="`block hover:text-primary hover:bg-blue-50 rounded-full cursor-pointer ${router.currentRoute.value.name == route.name ? 'text-primary' : ''}`" v-for="route in routes" :key="route">
                <div v-if="route.meta.isMenu" class="px-4 py-2 ">
                    <i :class="route.icon"></i>
                    <span class="ml-5 text-lg hidden lg:inline-block">{{route.title}}</span>
                </div>
              </router-link>
            </div>
          </nav>
          <!--// sidemenu icons -->
  
          <!-- tweet button -->
          <div class="lg:w-full">
            <button class="mt-3 bg-primary text-white lg:w-full w-12 h-12 rounded-full hover:bg-dark">
              <span class="hidden lg:block">트윗</span>
              <i class="fas fa-plus lg:hidden"></i>
            </button>
          </div>
          <!--// tweet button -->
        </div>
  
        <!-- profile button -->
        <div class="mb-3" @click="showProfileDropdown = true">
          <button class="mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 hidden lg:flex items-center">
            <img src="http://picsum.photos/100" alt="" class="w-10 h-10 rounded-full" />
            <div class="lg:ml-2 hidden lg:block">
              <div clas="text-sm font-bold">{{currentUser.email}}</div>
              <div class="text-xs text-grey-500 text-left" >@{{currentUser.username}}</div>
            </div>
            <i class="ml-auto fas fa-ellipsis-h fa-fw text-2xl hidden lg:block"></i>
          </button>
          <div class="lg:hidden flex justify-center">
            <img src="http://picsum.photos/100" alt="" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80" />
          </div>
        </div> 
        <!--// profile button -->
      </div>
  
      <!-- main section  -->
      <div class="flex-1 flex h-screen">
        <router-view />
      </div>

      <!-- profile dropdown menu -->
      <div class="absolute bottom-20 left-7 shadow rounded-lg w-60 bg-white" v-if="showProfileDropdown" @click="showProfileDropdown = false">
        <button class="flex hover:bg-gray-50 border-b border-gray-100 p-3 w-full items-center">
          <div class="ml-2">
            <div class="font-bold text-sm">{{currentUser.email}}</div>
            <div class="text-left text-gray-500">@{{currentUser.username}}</div>
          </div>
          <i class="fas fa-check text-primary ml-auto"></i>
        </button>
        <button class="p-3 hover:bg-gray-50 w-full text-left text-sm" @click="onLogout">@{{currentUser.username}} 계정에서 로그아웃</button>
      </div>

    </div>
  </template>
  
  <script>
    import {ref, onBeforeMount, computed } from 'vue'
    import router from '../router';
    import { auth } from '../firebase';
    import store from '../store';
  
    export default {
      setup() {
        const routes = ref([]) //초기값
        const showProfileDropdown = ref(false)

        const currentUser = computed(() => store.state.user)

        const onLogout = async () => {
          await auth.signOut()
          store.commit("SET_USER", null) // 로그인된 유저정보 초기화 시켜줌
          await router.replace('/login') //push로 하면 뒤로 왔을 경우 다시 화면 나올 수 있으니 로그인 페이지로 이동
          
        }
  
        onBeforeMount( () => {
          routes.value = router.options.routes

          //console.log(router.currentRoute.value); //현재 라우터 정보
        })
        return { routes, showProfileDropdown, onLogout, currentUser, router}
      }
    }
  </script>
  
  <style>
  
  </style>