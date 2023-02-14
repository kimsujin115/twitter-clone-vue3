<template>
  <!-- 회원가입 -->
  <div class="flex flex-col items-center mt-10 space-y-4">
    <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''}`"></i>
    <span class="text-2xl font-bold">트위터 회원가입</span>
    <input type="text" v-model="username" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="아이디">
    <input type="text" v-model="email" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="이메일">
    <input type="password" v-model="password" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" @keyup.enter="onRegister" placeholder="비밀번호">
    <button v-if="loading" class="w-96 rounded bg-light text-white py-4" >회원가입 중</button>
    <button v-else class="w-96 rounded bg-primary text-white py-4 hover:bg-dark" @click="onRegister">회원가입</button>
    <router-link to="/login">
      <button class="text-primary">계정이 이미 있으신가요? 로그인 하기</button>
    </router-link>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import { auth, USER_COLLECTION } from '../firebase'
  import { useRouter } from 'vue-router'

  export default {
    setup() {
      const username = ref('')
      const email = ref('')
      const password = ref('')
      const loading = ref(false)
      const router = useRouter()

      const onRegister = async () => {
        // console.log(username.value, email.value, password.value)
        if(!username.value || !email.value || !password.value) {
          alert('아이디, 이메일, 비밀번호를 모두 입력해주세요');
          return
        }

        try{
          loading.value = true
          const {user} = await auth.createUserWithEmailAndPassword(email.value, password.value)
          // const user = credential.user 
          const doc = USER_COLLECTION.doc(user.uid)
          await doc.set({ // 새로운 문서 만드는거야
            uid : user.uid,
            email : email.value,
            profile_img_url : '/profile.jpeg',
            num_tweets : 0,
            followers: [],
            followings : [],
            created_at : Date.now(),
          }) 
          alert('회원가입 성공! 로그인 해주세요')
          router.push('/login')
          
        } catch (e) {
          //console.log("create user with email end password error", e)
          switch (e.code) {
              case "auth/invalid-email":
                alert('잘못된 이메일 형식입니다.');
                break
              case "auth/weak-password":
                alert('비밀번호가 너무 쉬워요.');
                break
              case "auth/email-already-in-use":
                alert('이미 가입되어 있는 이메일 입니다.');
                break
              default : 
                alert(e.message + '회원가입 실패입니다.')
                break
            }
          // alert(e.message)
        } finally {
          loading.value = false
        }
      }

      return { username, email, password, loading, onRegister}
    }
  }
</script>

<style>

</style>