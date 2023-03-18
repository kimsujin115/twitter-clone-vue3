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
                            <button @click="$emit('close-modal')" class="fas fa-times text-primary text-lg p-2 w-10 hover:bg-blue-50 rounded-full"></button>
                            <!-- tweet button -->
                            <div class="text-right sm:hidden block mr-3">
                                <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-2 rounded-full">트윗</button>
                                <button v-else @click="onAddTweet" class="bg-primary text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-dark">트윗</button>
                            </div>
                        </div>
                        <!-- tweeting section -->
                        <div class="flex p-4">
                            <img :src="currentUser.profile_img_url" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
                            <div class="ml-2 flex-1 flex flex-col">
                                <textarea v-model="tweetBody" placeholder="무슨 일이 일어나고 있나요?" rows="5" class="w-full text-lg font-bold foucs:outline-none mb-3 resize-none"></textarea>
                                <!-- tweet button -->
                                <div class="text-right hidden sm:block">
                                    <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-2 rounded-full">트윗</button>
                                    <button v-else @click="onAddTweet" class="bg-primary text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-dark">트윗</button>
                                </div>
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
            const onAddTweet = async () => { 
                try {
                    addTweet(tweetBody.value, currentUser.value)
                    tweetBody.value = '';
                    emit('close-modal')
                } catch(e) {
                    console.log('on add tweet error on homepage')
                }
               
            }

            return { tweetBody, currentUser, onAddTweet}
        }
    }
</script>

<style>

</style>