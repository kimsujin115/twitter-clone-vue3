<template>
  <div class="flex h-screen container mx-auto">
    <!-- side section -->
    <div class="w-20 xl:w-1/4 py-5 px-5 flex flex-col justify-between border-r border-gray-100">
      <div class="flex flex-col items-center xl:items-start">
        <!-- twitter logo -->
        <i class="fa-brands fa-twitter text-3xl text-primary lg:ml-4"></i>
        <!-- sidemenu icons -->
        <nav class="mt-3">
          <div class="flex flex-col items-start">
            <router-link :to="route.path" class="block hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer" v-for="route in routes" :key="route">
              <i :class="route.icon"></i>
              <span class="ml-5 text-lg hidden lg:inline-block">{{route.title}}</span>
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
      <div class="mb-3">
        <button class="mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 hidden lg:flex items-center">
          <img src="http://picsum.photos/100" alt="" class="w-10 h-10 rounded-full" />
          <div class="lg:ml-2 hidden lg:block">
            <div clas="text-sm font-bold">sujin.com</div>
            <div class="text-xs text-grey-500 text-left" >@sujin</div>
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
  </div>
</template>

<script>
  import {ref, onBeforeMount} from 'vue'
  import router from './router';

  export default {
    setup() {
      const routes = ref([]) //초기값

      onBeforeMount( () => {
        routes.value = router.options.routes
      })
      return {
        routes
      }
    }
  }
</script>

<style>

</style>