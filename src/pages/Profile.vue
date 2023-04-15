<template>
    <div class="flex-1 flex">
        <!-- profile section -->
        <div class="flex-1 flex flex-col border-r border-color">
            <!-- title -->
            <div class="px-3 py-1 flex border-b border-color">
                <button class="mr-4">
                    <i class="fas fa-arrow-left text-primary p-3 rounded-full hover:bg-blue-50"></i>
                </button>
                <div>
                    <div class="font-extrabold text-lg">{{ currentUser.email }}</div>
                    <div class="text-xs text-gray-500-500">{{ currentUser.num_tweets }} 트윗</div>
                </div>
            </div>
            <!-- profile area -->
            <div class="bg-gray-300 h-40 relative flex-none">
                <!-- profile image -->
                <div class="absolute -bottom-14 left-2 w-28 h-28 border-4 border-white bg-gray-100 rounded-full">
                    <img :src="currentUser.profile_img_url" class="rounded-full opacity-90 hover:opacity-100 cursor-pointer" alt="">
                </div>
            </div>
            <!-- profile edit button -->
            <div class="text-right mt-2 mr-2">
                <button class="border text-sm border-primary text-primary px-3 py-2 hover:bg-blue-50 font-bold rounded-full">프로필 수정</button>
            </div>
            <!-- user info -->
            <div class="mx-3 mt-2">
               <div class="font-extrabold text-lg">{{ currentUser.email }}</div>
               <div class="text-gray-500">@{{ currentUser.username }}</div>
               <div>
                <span class="text-gray-500">가입일 : </span>
                <span class="text-gray-500">{{ moment(currentUser.created_at).format('YYYY년 MM월') }}</span>
               </div> 
               <div>
                <span class="font-bold mr-1">{{ currentUser.followings }}</span>
                <span class="text-gray-500">팔로우 중</span>
                <span class="font-bold mr-1 ml-2">{{ currentUser.follwer }}</span>
                <span class="text-gray-500">팔로워</span>
               </div>
            </div>
            <!-- tabs -->
            <ul class="flex border-b border-color mt-3">
                <li @click="currentTab = 'tweet'" :class="`${currentTab == 'tweet' ? 'border-b border-primary text-primary' : 'text-gray-500'} py-3 w-1/3 font-bold hover:bg-blue-50 text-center cursor-pointer`">트윗</li>
                <li @click="currentTab = 'retweet'" :class="`${currentTab == 'retweet' ? 'border-b border-primary text-primary' : 'text-gray-500'} py-3 w-1/3 font-bold hover:bg-blue-50 text-center cursor-pointer`">리트윗</li>
                <li @click="currentTab = 'like'" :class="`${currentTab == 'like' ? 'border-b border-primary text-primary' : 'text-gray-500'} py-3 w-1/3 font-bold hover:bg-blue-50 text-center cursor-pointer`">좋아요</li>
            </ul>
            <!-- tweet -->
            <div class="overflow-y-auto">
                <Tweet v-for="tweet in currentTab == 'tweet' ? tweets : currentTab == 'retweet' ? reTweets : likeTweets" :key="tweet.id" :currentUser="currentUser" :tweet="tweet" />            </div>
        </div>
        <!-- trend section -->
        <Trends /> 
    </div>    
</template>

<script>
    import Trends from '../components/Trends.vue'
    import Tweet from '../components/Tweet.vue'
    import store from '../store';
    import { computed, ref, onBeforeMount } from 'vue';
    import { LIKES_COLLECTION, RETWEET_COLLECTION, TWEET_COLLECTION, USER_COLLECTION } from '../firebase';
    import getTweetInfo from '../utils/getTweetInfo';
    import moment from 'moment';

    export default {
        components : { Trends, Tweet },
        setup() {
            const currentUser = computed(() => store.state.user )
            const tweets = ref([])
            const reTweets = ref([])
            const likeTweets = ref([])
            const currentTab = ref('tweet')

            onBeforeMount(() => {

                USER_COLLECTION.doc(currentUser.value.uid).onSnapshot(doc => {
                    store.commit("SET_USER", doc.data())
                })

                TWEET_COLLECTION.where("uid", "==", currentUser.value.uid).orderBy("create_at", "desc").onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(async (change) => {
                        let tweet = await getTweetInfo(change.doc.data(), currentUser.value); //getTweetInfo함수를 async로 가져왔으니까 해당 변수해서도 정보 가져올동안 기다려야함
                        //console.log('tweet info : ', tweet)

                        if (change.type === 'added') {
                            tweets.value.splice(change.newIndex, 0, tweet)
                        } else if(change.type === 'modified') {
                            tweets.value.splice(change.oldIndex, 1, tweet)
                        } else if(change.type == 'removed') {
                            tweets.value.splice(change.oldIndex, 1)
                        }
                    })
                })

                RETWEET_COLLECTION.where('uid', '==', currentUser.value.uid).orderBy('created_at', 'desc').onSnapshot((snapshot) => {
                    snapshot.docChanges().forEach(async (change) => {
                        const doc = await TWEET_COLLECTION.doc(change.doc.data().from_tweet_id).get()
                        let tweet = await getTweetInfo(doc.data(), currentUser.value)

                        if (change.type === 'added') {
                            reTweets.value.splice(change.newIndex, 0, tweet)
                        } else if (change.type === 'modified') {
                            reTweets.value.splice(change.oldIndex, 1, tweet)
                        } else if (change.type === 'removed') {
                            reTweets.value.splice(change.oldIndex, 1)
                        }
                    })
                })

                LIKES_COLLECTION.where('uid', '==', currentUser.value.uid).orderBy('created_at', 'desc').onSnapshot((snapshot) => {
                    snapshot.docChanges().forEach(async (change) => {
                        const doc = await TWEET_COLLECTION.doc(change.doc.data().from_tweet_id).get()
                        let tweet = await getTweetInfo(doc.data(), currentUser.value)

                        if (change.type === 'added') {
                            likeTweets.value.splice(change.newIndex, 0, tweet)
                        } else if (change.type === 'modified') {
                            likeTweets.value.splice(change.oldIndex, 1, tweet)
                        } else if (change.type === 'removed') {
                            likeTweets.value.splice(change.oldIndex, 1)
                        }
                    })
                })

            })

            return { currentUser, tweets, reTweets, likeTweets, moment, currentTab }
        }
    }
</script>

<style>

</style>