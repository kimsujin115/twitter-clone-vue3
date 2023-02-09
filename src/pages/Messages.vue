<template>
  <div class="flex-1 flex">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-auto">
        <div class="flex flex-col">
            <!-- title -->
            <div class="p-3 h-14 font-bold text-lg border-b border-gray-100">쪽지</div>
            <div class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray-100 bg-gray-200">
                <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full cursor-pointer mr-2" />
                <div>
                    <div class="flex space-x-1">
                        <span class="font-bold">sujin.com</span>
                        <span class="text-gray-500">@sujin</span>
                        <span class="text-gray-500">2월 9일</span>
                    </div>
                    <div class="text-gray-500">메세지</div>
                </div>
            </div>
            <!-- a chat list -->
            <div class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray-100" v-for="message in 10" :key="message">
                <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full cursor-pointer mr-2" />
                <div>
                    <div class="flex space-x-1">
                        <span class="font-bold">sujin.com</span>
                        <span class="text-gray-500">@sujin</span>
                        <span class="text-gray-500">2월 9일</span>
                    </div>
                    <div class="text-gray-500">메세지</div>
                </div>
            </div>
        </div>
    </div>
    <!-- chatting -->
    <div class="w-3/5 border-r border-gray-100">
        <div class="flex flex-col h-screen">
            <!-- title -->
            <div class="flex px-3 h-15 items-center border-b border-gray-100">
                <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mr-2 cursor-pointer" />
                <div>
                    <div class="font-bold text-lg">sujin.com</div>
                    <div class="text-sm text-gray-500">@sujin</div>
                </div>
            </div>
            <!-- user info -->
            <div class="flex flex-col justify-center items-center border-b border-gray-100 hover:bg-gray-100 py-6">
                <div>
                    <span class="font-bold mr-1">sujin.com</span>
                    <span class="text-gray-500">@sujin</span>
                </div>
                <div>
                    <span class="font-bold mr-1">28</span><span class="text-gray-500">팔로우 중</span>
                    <span class="font-bold ml-3 mr-1">7</span><span class="text-gray-500">팔로워</span>  
                </div>
                <div>
                    <span class="text-gray-500 mr-1">가입일 : </span>
                    <span class="text-gray-500">2023년 2월</span>
                </div>
            </div>
            
            <!-- bubble group -->
            <div class="flex-1 overflow-y-auto">
                <!-- chat bubble : my chat -->
                <div class="text-right px-3 py-3">
                    <span class="bg-primary text-white px-4 py-2 rounded-full">메시지</span> 
                    <div class="mt-2 text-sm text-gray-500">2023년 1월 29일 오전 1:05</div>
                </div>
                <!-- chat bubble : another chat -->
                <div class="text-lefts px-3 py-3" v-for="chat in 10" :key="chat">
                    <span class="bg-gray-100 px-4 py-2 rounded-full">메시지</span> 
                    <div class="mt-2 text-sm text-gray-500">2023년 1월 29일 오전 1:05</div>
                </div>
            </div>

            <!-- chat input -->
            <div class="flex items-center bg-white border-t border-gray-100 sticky">
                <input type="text" class="flex-1 m-2 py-1 px-4 rounded-full bg-gray-100 resize-none outline-none" placeholder="쪽지 작성하기">
                <button class="text-center">
                    <i class="far fa-paper-plane text-primary text-lg hover:bg-blue-50 p-2 rounded-full w-10 h-10"></i>
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script></script>
    export default {

    }
</script>

<style>

</style>