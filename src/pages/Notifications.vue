<template>
  <!-- notification -->
  <div class="flex-1 border-r border-grey-100 flex flex-col overflow-y-auto">
    <!-- title -->
    <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
    <!-- notifications -->
    <div class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer" v-for="notification in 10" :key="notification">
        <div class="flex justify-between">
            <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opaticy-80" alt="">
            <i class="fas fa-ellipsis-h text-gray-500 hover:text-primary hover:bg-blue-50 p-2 rounded-full w-10 h-10 flex items-center justify-center"></i>
        </div>
        <p><span class="font-bold pr-1">김수진</span>님의 최근 트윗</p>
        <div class="text-gray-500">
            트위터 글 게시글 내용입니다. 내용입니다. 트위터 글 게시글 내용입니다. 내용입니다. 트위터 글 게시글 내용입니다. 내용입니다. 트위터 글 게시글 내용입니다. 내용입니다.
        </div>
    </div>
  </div> 
  <!-- trends -->
  <Trends />
</template>

<script>
    import Trends from '../components/Trends.vue'
    export default {
        components : { Trends },
    }
</script>

<style>

</style>