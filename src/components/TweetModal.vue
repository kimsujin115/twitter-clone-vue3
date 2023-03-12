<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">
         <!-- dim -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <!-- modal content wrap -->
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <!-- modal inner wrap -->
                <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <!-- close btn -->
                    <div class="border-b border-gray-100 p-2">
                        <button class="fas fa-times text-primary text-lg p-2 w-10 hover:bg-blue-50 rounded-full"></button>
                    </div>
                    <!-- tweeting section -->
                    <div class="flex p-4">
                        <img src="http://picsum.photos/100" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
                        <div class="ml-2 flex-1 flex flex-col">
                        <textarea v-model="tweetBody" placeholder="무슨 일이 일어나고 있나요?" rows="5" class="w-full text-lg font-bold foucs:outline-none mb-3 resize-none"></textarea>
                        <div class="text-right">
                            <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-2 rounded-full">트윗</button>
                            <button v-else @click="onAddTweet" class="bg-primary text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-dark">트윗</button>
                        </div>
                        </div>
                    </div>
                    <!-- <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    export default {
        setup() {
            const tweetBody = ref('')

            return { tweetBody }
        }
    }
</script>

<style>

</style>