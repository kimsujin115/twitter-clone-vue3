<template>
  <!-- 회원가입 -->
  <div class="flex flex-col items-center mt-10 space-y-4">
    <i :class="`fab fa-twitter text-4xl text-primary ${loding ? 'animate-bounce' : ''}`"></i>
    <span class="text-2xl font-bold">트위터 회원가입</span>
    <input type="text" v-model="username" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="아이디">
    <input type="text" v-model="email" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="이메일">
    <input type="password" v-model="password" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="비밀번호">
    <button class="w-96 rounded bg-primary text-white py-4 hover:bg-dark" @click="onRegister">회원가입</button>
    <router-link to="/login">
      <button class="text-primary">계정이 이미 있으신가요? 로그인 하기</button>
    </router-link>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { auth } from '../firebase'

  export default {
    setup() {
      const username = ref('')
      const email = ref('')
      const password = ref('')
      const loding = ref(false)

      const onRegister = async () => {
        // console.log(username.value, email.value, password.value)
        try{
          const credential = await auth.createUserWithEmailAndPassword(email.value, password.value)
          console.log(credential)
        } catch (e) {
          console.log("create user with email end password error", e)
          alert(e.message)
        }
      }

      return { username, email, password, loding, onRegister}
    }
  }
</script>

<style>

</style>