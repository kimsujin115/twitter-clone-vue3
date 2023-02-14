<template>
    <!-- trend part -->
    <div class="hidden lg:block w-2/5 px-4 py-2">
        <!-- tweet search input -->
        <div class="relative mb-5">
            <input type="input" placeholder="트위터 검색" class="pl-10 rounded-full w-full p-2 bg-gray-100 text-sm focus:ring-primary focus:ring-1 focus:bg-white focus:outline-none" />
            <i class="fas fa-search absolute left-0 mt-2 ml-3 text-sm text-light"></i>
        </div>
        <!-- trend for me -->
        <div class="w-full rounded-xl bg-gray-50">
            <div class="flex items-center justify-between px-3 py-1 border-b border-gray-100">
                <strong class="text-lg">나를 위한 트렌드</strong>
                <i class="fas fa-cog text-lg text-primary hover:bg-blue-50 p-2 rounded-full text-center cursor-pointer"></i>
            </div>
            <ul>
                <li class="px-4 py-2 border-b border-gray-100 hover:bg-gray-200 cursor-pointer" v-for="trand in 3" :key="trand">
                    <div class="flex">
                        <div class="flex-1 flex flex-col">
                            <span class="text-gray-500">대한민국에서 트렌드 중</span>
                            <span class="font-bold text-lg">러블리즈</span>
                            <span class="text-gray-500">3,564 트윗</span>
                        </div>
                        <i class="fas fa-ellipsis-h text-gray-500"></i>
                    </div>
                </li>
            </ul>
            <div class="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                <span class="text-primary text-lg rounded-xl">더보기</span>
            </div>
        </div>
        <!-- follow recommends -->
        <div class="mt-5 w-full rounded-xl bg-gray-50">
            <div class="px-3 py-3 border-b border-gray-100">
                <strong class="text-lg">팔로우 추천</strong>
            </div>
            <ul>
                <li class="px-4 py-2 border-b border-gray-100 hover:bg-gray-200" v-for="trand in 3" :key="trand">
                    <div class="flex items-center">
                        <div class="mr-2">
                            <img src="http://picsum.photos/200" class="w-12 h-12 rounded-full">
                        </div>
                        <div class="flex-1 flex flex-col">
                            <span class="font-bold">트렌드</span>
                            <span class="text-gray-500 text-xs">@trand_korea</span>
                        </div>
                        <div>
                            <button class="px-2 py-1 border-2 border-primary rounded-full text-primary hover:bg-blue-100 text-xs">팔로우</button>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                <span class="text-primary text-lg rounded-xl">더보기</span>
            </div>
        </div>
    </div> 
</template>

<script>
    
</script>

<style>

</style>