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
                        <div>
                            <!-- original tweet -->
                            <div class="flex px-4 pt-4 pb-3">
                                <div class="flex flex-col">
                                    <img :src="tweet.profile_img_url" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
                                    <div class="ml-5 w-0.5 h-full bg-gray-300 mt-2 -mb-1"></div>
                                </div>
                                <div class="ml-2 flex-1">
                                    <div class="flex space-x-2">
                                        <span class="font-bold text-sm">{{ tweet.email }}</span>
                                        <span class="text-gray text-sm">@{{ tweet.username }}</span>
                                        <span class="text-gray text-sm">{{ moment(tweet.create_at).fromNow() }}</span>
                                    </div>
                                    <div class="text-sm">{{ tweet.tweet_body }}</div>
                                    <div>
                                        <span class="text-primary text-sm">@{{ tweet.username }}</span>
                                        <span class="text-gray text-sm">님에게 보내는 답글</span>
                                    </div>
                                </div>
                            </div>
                            <!-- tweeting section -->
                            <div class="flex px-4 pb-4">
                                <img :src="currentUser.profile_img_url" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
                                <div class="ml-2 flex-1 flex flex-col">
                                    <textarea v-model="tweetBody" placeholder="내 답글을 트윗합니다" rows="5" class="w-full text-lg font-bold foucs:outline-none mb-3 resize-none"></textarea>
                                    <!-- tweet button -->
                                    <div class="text-right hidden sm:block">
                                        <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-2 rounded-full">답글</button>
                                        <button v-else @click="onCommentTweet" class="bg-primary text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-dark">답글</button>
                                    </div>
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
    import moment from 'moment'
    import addTweet from '../utils/addTweet';
    import store from '../store';
    import { COMMENT_COLLECTION, TWEET_COLLECTION } from '../firebase';
    import firebase from 'firebase';

    export default {
        props : ['tweet'], //부모컴포넌트에서 가져와서 자식 컴포넌트에서도 사용 할 수 있음
        setup(props, { emit }) {
            const tweetBody = ref('')
            const currentUser = computed(() => store.state.user)

            const onCommentTweet = async () => {
               try {
                const doc =  COMMENT_COLLECTION.doc()
                await doc.set({
                    id : doc.id,
                    from_tweet_id : props.tweet.id,
                    comment_tweet_body : tweetBody.value,
                    uid : currentUser.value.uid,
                    created_at : Date.now(),
                })

                await TWEET_COLLECTION.doc(props.tweet.id).update({
                    num_comments: firebase.firestore.FieldValue.increment(1), //firebase 공식문서 참고
                })
                emit('close-modal')
               } catch(e) {
                console.log('on comment tweet error: ', e)
               }
            }

            return { tweetBody, moment, currentUser, onCommentTweet}
        }
    }
</script>