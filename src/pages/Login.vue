<template>
    <!-- 회원가입 -->
    <div class="flex flex-col items-center mt-10 space-y-4">
      <i :class="`fab fa-twitter text-4xl text-primary ${loding ? 'animate-bounce' : ''}`"></i>
      <span class="text-2xl font-bold">트위터 회원가입</span>
      <input type="text" v-model="email" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="이메일">
      <input type="password" v-model="password" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="비밀번호">
      <button class="w-96 rounded bg-primary text-white py-4 hover:bg-dark" @click="onLogin">로그인</button>
      <router-link to="/register">
        <button class="text-primary">계정이 없으신가요? 회원가입 하기</button>
      </router-link>
    </div>
  </template>
  
  <script>
    import {ref} from 'vue'
    export default {
      setup() {
        const email = ref('')
        const password = ref('')
        const loding = ref(false)
  
        const onLogin = () => {
          console.log( email.value, password.value)
        }
  
        return {email, password, loding, onLogin}
      }
    }
  </script>
  
  <style>
  
  </style>