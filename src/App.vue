<template>
  <div class="flex h-screen container mx-auto">
    <!-- side section -->
    <div class="w-20 lg:w-1/4 py-5 px-5 flex flex-col justify-between border-r border-gray-100">
      <div class="flex flex-col items-center lg:items-start">
        <!-- twitter logo -->
        <i class="fa-brands fa-twitter text-3xl text-primary lg:ml-4"></i>
        <!-- sidemenu icons -->
        <nav class="mt-3">
          <ul class="flex flex-col items-start">
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                <i class="fas fa-house fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                <i class="far fa-hashtag fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                <i class="far fa-bell fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                <i class="far fa-envelope fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                <i class="fa-regular fa-fw fa-bookmark text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                <i class="far fa-list-alt fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                <i class="far fa-user fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">더보기</span>
              </div>
            </li>
          </ul>
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

    <!-- right home page-->
    <div class="flex-1">
        <div class="flex h-screen">
            <!-- main section -->
            <div class="flex-1 border-r border-gray-100 overflow-y-auto">
              <div class="flex flex-col">
                <!-- page title -->
                <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">
                  홈
                </div>
                <!-- tweeting section -->
                <div class="flex px-3 py-3 border-b-8 border-grey-100">
                  <img src="http://picsum.photos/200" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
                  <div class="ml-2 flex-1 flex flex-col">
                    <textarea placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold foucs:outline-none mb-3 resize-none"></textarea>
                    <div class="text-right">
                      <button class="bg-primary text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-dark">
                        트윗
                      </button>
                    </div>
                  </div>
                </div>
                <!-- tweets -->
                <div class="flex px-3 py-3 border-b border-gray-100" v-for="tweet in 10" :key="tweet">
                  <img src="http://picsum.photos/200" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
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
                 
              </div>
            </div>
            <!-- trend section -->
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
                        <span class="font-bold text-lg">트렌드</span>
                        <span class="text-gray-500">@trand_korea</span>
                      </div>
                      <div>
                        <button class="px-4 py-1 border-2 border-primary rounded-full text-primary hover:bg-blue-100">팔로우</button>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
                  <span class="text-primary text-lg rounded-xl">더보기</span>
                </div>
              </div>
            </div> 
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>