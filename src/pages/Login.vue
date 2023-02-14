<template>
    <!-- 회원가입 -->
    <div class="flex flex-col items-center mt-10 space-y-4">
      <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''}`"></i>
      <span class="text-2xl font-bold">트위터  로그인</span>
      <input type="text" v-model="email" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="이메일">
      <input type="password" v-model="password" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" @keyup.enter="onLogin" placeholder="비밀번호">
      <button v-if="loading" class="w-96 rounded bg-light text-white py-4" >로그인 중</button>
      <button v-else class="w-96 rounded bg-primary text-white py-4 hover:bg-dark" @click="onLogin">로그인</button>
      <router-link to="/register">
        <button class="text-primary">계정이 없으신가요? 회원가입 하기</button>
      </router-link>
    </div>
  </template>
  
  <script>
    import { ref } from 'vue'
    import { auth } from '../firebase'
    import { useRouter } from 'vue-router'

    export default {
      setup() {
        const email = ref('')
        const password = ref('')
        const loading = ref(false)
        const router = useRouter()
  
        const onLogin = async () => {
          if(!email.value || !password.value) {
            alert('이메일, 비밀번호를 모두 입력해주세요');
            return
          }

          try {
            loading.value = true
            const {user} = await auth.signInWithEmailAndPassword(email.value, password.value)
            console.log(user.uid)
            router.replace('/') //앞에 history back 정보값 없애고 아예 첫 페이지로 시작하게끔
          } catch(e) {
            switch (e.code) {
              case "auth/invalid-email":
                alert('잘못된 이메일 형식입니다.');
                break
              case "auth/wrong-password":
                alert('비밀번호가 틀립니다.');
                break
              case "auth/user-not-found":
                alert('등록되지 않은 이메일입니다.');
                break
              default : 
                alert(e.message + '로그인 실패입니다')
                break
            }

          } finally {
            loading.value = false
          }
          //console.log( email.value, password.value)
        }
  
        return {email, password, loading, onLogin}
      }
    }
  </script>
  
  <style>
  
  </style>