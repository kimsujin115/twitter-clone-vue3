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
            <Tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" :currentUser="currentUser"/> <!-- Tweet이라는 컴포넌트에 사용하고 싶은 데이터 정보를 넘겨줘 -->
        </div>
    </div>
    <!-- trend part -->
    <Trends /> 
</template>

<script>
    import Trends from '../components/Trends.vue'
    import Tweet from '../components/Tweet.vue'
    import {ref, computed, onBeforeMount} from 'vue'
    import store from '../store'
    import { TWEET_COLLECTION, USER_COLLECTION } from '../firebase'
    import addTweet from '../utils/addTweet'
    import getTweetInfo from '../utils/getTweetInfo'

    export default {
        components : { Trends, Tweet },
        setup() {
            const tweetBody = ref('');
            const currentUser = computed( () => store.state.user)
            const tweets = ref([])

            onBeforeMount( () => {
                //firebase firestore onsnapshot 공식문서에 방법 참고 해보기
                TWEET_COLLECTION.orderBy("create_at", "desc").onSnapshot(snapshot => {
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
            })

            //유저정보를 가져올 수 있는 함수(USER_COLLECTION에서 tweet컬렉션으로 정보 가져옴)
            // const getTweetInfo = async (tweet) => {
            //     const doc = await USER_COLLECTION.doc(tweet.uid).get()
            //     tweet.profile_img_url = doc.data().profile_img_url
            //     tweet.email = doc.data().email
            //     tweet.username = doc.data().username

            //     //tweet = {...tweet, ...doc.data()} //js ... synlax (유저컬랙션과 트윗컬랙션 전체 가져올 때 이런 구문 사용가능)
            //     //console.log(tweet)
            //     return tweet
            // }

            const onAddTweet = async () => { 
                try {
                    await addTweet(tweetBody.value, currentUser.value)
                    tweetBody.value = '';
                } catch(e) {
                    console.log('on add tweet error on homepage', e)
                }
               
            }

            return { tweetBody, currentUser, onAddTweet, tweets }
        },
    }
</script>

<style>

</style>