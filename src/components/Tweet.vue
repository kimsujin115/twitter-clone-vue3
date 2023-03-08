<template>
    <!-- tweet -->
    <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
        <img :src="currentUser.profile_img_url" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
        <div class="ml-3 flex-1 flex flex-col space-y-1">
            <div class="text-sm space-x-1">
                <span class="font-bold">닉네임</span>
                <span class="text-gray-500 text-xs">@patriamea</span>
                <span>·</span>
                <span class="text-gray-500 text-xs">7분</span>
            </div>
            <!-- tweet body -->
            <div>
                작성한 내용입니다. 작성한 내용입니다. 작성한 내용입니다. 작성한 내용입니다. 작성한 내용입니다. 
            </div>
            <!-- tweet actions -->
            <div class="flex justify-between">
                <div class="text-gray-500 hover:text-primary">
                    <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">11</span>
                </div>
                <div class="text-gray-500 hover:text-green-500">
                    <i class="fas fa-retweet hover:bg-green-50  rounded-full p-2"></i>
                    <span class="ml-1 text-sm">3</span>
                </div>
                <div class="text-gray-500 hover:text-red-500">
                    <i class="far fa-heart hover:bg--50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">5</span>
                </div>
                <div class="text-gray-500 hover:text-primary">
                    <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //Home.vue에서 넘겨받을 정보를 사용할 수 있게 props 이용    
    props : ['currentUser']
}
</script>

<style>

</style>