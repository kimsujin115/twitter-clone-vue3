<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
        <div class="flex justify-center min-h-screen ">
            <!-- dim -->
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <!-- modal inner wrap -->
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full justify-center text-center sm:items-start sm:pt-4 sm:px-4 sm:pb-20">
                    <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                        <!-- close btn -->
                        <div class="flex justify-between items-center border-b border-gray-100 p-2">
                            <div class="flex items-center">
                                <button @click="$emit('close-modal')" class="fas fa-times flex justify-center text-primary text-lg p-2 w-10 hover:bg-blue-50 rounded-full"></button>
                                <span class="font-bold text-lg">프로필 수정</span>
                            </div>
                            <div class="text-right mr-2">
                                <button class="hover:bg-dark bg-primary text-white font-bold px-3 py-1 rounded-full">저장</button>
                            </div>
                        </div>
                        <!-- image section -->
                        <div class="h-60">
                            <!-- background image -->
                            <div class="bg-gray-300 h-40 relative flex-none flex items-center justify-center">
                                <img ref="backgroundImage" src="/background.png" class="object-cover absolute h-full w-full" alt="">
                                <button @click="onChangeBackgroundImage" class="absolute h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg"></button>
                                <input @change="previewBackgroundImage" type="file" accept="image/*" id="backgroundImageInput" class="hidden">

                                <!-- profile image-->
                                <div class="absolute -bottom-14 left-2">
                                    <img ref="profileImage" src="/profile.jpeg" class="object-cover border-4 border-white w-28 h-28 rounded-full" alt="">
                                    <button @click="onChangeProfileImage" class="absolute bottom-9 left-9 h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg"></button>
                                    <input @change="previewProfileImage" type="file" accept="image/*" id="profileImageInput" class="hidden">
                                </div>
                            </div>
                        </div>

                        <!-- -->
                        <div class="flex flex-col p-2">
                            <div class="mx-2 my-2 px-2 py-1 border border-gray-200 text-gray rounded hover:border-primary hover:text-primary">
                                <div class="text-sm">이름</div>
                                <input type="text" :value="currentUser.email" class="text-black focus:outline-none">
                            </div>
                            <div class="mx-2 my-1 px-2 py-5 border border-gray-200 text-gray rounded hover:border-primary hover:text-primary">
                                <input type="text" placeholder="자기소개" class="text-black focus:outline-none">
                            </div>
                            <div class="mx-2 my-1 px-2 py-5 border border-gray-200 text-gray rounded hover:border-primary hover:text-primary">
                                <input type="text" placeholder="위치" class="text-black focus:outline-none">
                            </div>
                            <div class="mx-2 my-1 px-2 py-5 border border-gray-200 text-gray rounded hover:border-primary hover:text-primary">
                                <input type="text" placeholder="웹사이트" class="text-black focus:outline-none">
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    </div>
</template>

<script>
    import { ref, computed } from 'vue';
    import addTweet from '../utils/addTweet';
    import store from '../store';

    export default {
        setup(props, { emit }) {
            const tweetBody = ref('')
            const currentUser = computed(() => store.state.user)
            const backgroundImage = ref(null)
            const profileImage = ref(null)

            const onAddTweet = async () => { 
                try {
                    addTweet(tweetBody.value, currentUser.value)
                    tweetBody.value = '';
                    emit('close-modal')
                } catch(e) {
                    console.log('on add tweet error on homepage')
                }
               
            }

            const onChangeBackgroundImage = () => {
                document.getElementById('backgroundImageInput').click();
            }

            const onChangeProfileImage = () => {
                document.getElementById('profileImageInput').click();
            }

            const previewBackgroundImage = (event) => {
                const file = event.target.files[0]
                let reader = new FileReader()
                reader.onload = function(event) {
                    backgroundImage.value.src = event.target.result
                }
                reader.readAsDataURL(file)
            }

            const previewProfileImage = (event) => {
                const file = event.target.files[0]
                let reader = new FileReader()
                reader.onload = function(event) {
                    profileImage.value.src = event.target.result
                }
                reader.readAsDataURL(file)
            }


            return { tweetBody, currentUser, onAddTweet, onChangeBackgroundImage, onChangeProfileImage, backgroundImage, profileImage, previewBackgroundImage, previewProfileImage}
        }
    }
</script>

<style>

</style>