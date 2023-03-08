<template>
    <!-- main part -->
    <div class="flex-1 border-r border-gray-100 overflow-y-auto">
        <div class="flex flex-col">
            <!-- page title -->
            <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">
                홈
            </div>
            <!-- tweeting section -->
            <div class="flex px-3 py-3 border-b-8 border-grey-100">
                <img :src="currentUser.profile_img_url" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
                <div class="ml-2 flex-1 flex flex-col">
                <textarea v-model="tweetBody" placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold foucs:outline-none mb-3 resize-none"></textarea>
                <div class="text-right">
                    <button v-if="!tweetBody.length" class="bg-light text-sm font-bold text-white px-4 py-2 rounded-full">트윗</button>
                    <button v-else @click="onAddTweet" class="bg-primary text-sm font-bold text-white px-4 py-2 rounded-full hover:bg-dark">트윗</button>
                </div>
                </div>
            </div>
            <!-- tweets -->
            <Tweet v-for="tweet in 5" :key="tweet" :currentUser="currentUser"/> <!-- Tweet이라는 컴포넌트에 사용하고 싶은 데이터 정보를 넘겨줘 -->
        </div>
    </div>
    <!-- trend part -->
    <Trends /> 
</template>

<script>
    import Trends from '../components/Trends.vue'
    import Tweet from '../components/Tweet.vue'
    import {ref, computed} from 'vue'
    import store from '../store'
    import { TWEET_COLLECTION } from '../firebase'

    export default {
        components : { Trends, Tweet },
        setup() {
            const tweetBody = ref('');
            const currentUser = computed( () => store.state.user)

            const onAddTweet = async () => { 
                try {
                    const doc = TWEET_COLLECTION.doc()
                    await doc.set({
                        id : doc.id,
                        tweet_body : tweetBody.value,
                        uid : currentUser.value.uid,
                        create_at : Date.now(),
                        num_comments : 0,
                        num_retweets : 0,
                        num_likes : 0,
                    })
                    tweetBody.value = '';
                } catch(e) {
                    console.log('on add tweet error on homepage')
                }
               
            }

            return { tweetBody, currentUser, onAddTweet }
        },
    }
</script>

<style>

</style>