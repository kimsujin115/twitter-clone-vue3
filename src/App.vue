<template>
  <div class="flex h-screen">
    <!-- side section -->
    <div class="w-1/4 py-5 px-5 flex flex-col justify-between border-r border-gray-100">
      <div class="flex flex-col items-center lg:items-start">
        <!-- twitter logo -->
        <i class="fa-brands fa-twitter text-3xl text-primary lg:ml-4"></i>
        <!-- sidemenu icons -->
        <nav class="mt-3">
          <ul class="flex flex-col items-start">
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                <i class="fas fa-house fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                <i class="far fa-hashtag fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                <i class="far fa-bell fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                <i class="far fa-envelope fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                <i class="fa-regular fa-fw fa-bookmark text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                <i class="far fa-list-alt fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                <i class="far fa-user fa-fw text-2xl"></i>
                <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
              </div>
            </li>
            <li>
              <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
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
            <div class="flex-1 border-r border-gray-100">
              <div class="flex flex-col">
                <!-- page title -->
                <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">
                  홈
                </div>
                <!-- trend section -->
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
                <!-- tweeting section -->
                 
              </div>
            </div>
            
            <div class="w-2/5">
              
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