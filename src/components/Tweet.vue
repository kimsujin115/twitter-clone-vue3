<template>
    <!-- tweet -->
    <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
        <router-link :to="`/profile/${tweet.uid}`">
            <img :src="tweet.profile_img_url" alt="" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer">
        </router-link>
        <div class="ml-3 flex-1 flex flex-col space-y-1">
            <div class="text-sm flex justify-between items-center">
                <div class="space-x-1">
                    <span class="font-bold">{{ tweet.email }}</span>
                    <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
                    <span>·</span>
                    <span class="text-gray-500 text-xs">{{ moment(tweet.create_at).fromNow() }}</span>
                </div>
                <button v-if="currentUser.uid === tweet.uid" @click="onDeleteTweet(tweet)">
                    <i class="fas fa-trash text-red-400 p-2 rounded-full hover:bg-red-500 hover:text-white"></i>
                </button>
            </div>
            <!-- tweet body -->
            <router-link :to="`/tweet/${tweet.id}`">{{ tweet.tweet_body }}</router-link>
            <!-- tweet actions -->
            <div class="flex justify-between">
                <!-- comment button -->
                <div @click="showCommentModal = true"  class="text-gray-500 hover:text-primary">
                    <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">{{ tweet.num_comments }}</span>
                </div>
                <!-- retweet button -->
                <div v-if="!tweet.isRetweeted" @click="handleRetweet(tweet)" class="text-gray-500 hover:text-green-400">
                    <i class="fas fa-retweet hover:bg-green-50  rounded-full p-2"></i>
                    <span class="ml-1 text-sm">{{tweet.num_retweets}}</span>
                </div>
                <div v-else @click="handleRetweet(tweet)" class="text-green-400">
                    <i class="fas fa-retweet hover:bg-green-50  rounded-full p-2"></i>
                    <span class="ml-1 text-sm">{{tweet.num_retweets}}</span>
                </div>
                <!-- like button -->
                <div v-if="!tweet.isLiked" @click="handleLikes(tweet)" class="text-gray-500 hover:text-red-500">
                    <i class="far fa-heart hover:bg--50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">{{tweet.num_likes}}</span>
                </div>
                <div v-else @click="handleLikes(tweet)" class="text-red-500">
                    <i class="far fa-heart hover:bg--50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">{{tweet.num_likes}}</span>
                </div>
                <!-- share button -->
                <div class="text-gray-500 hover:text-primary">
                    <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
                </div>
            </div>
        </div>
    </div>
    <comment-modal :tweet="tweet" v-if="showCommentModal" @close-modal="showCommentModal = false"></comment-modal>
</template>

<script>
    import moment from 'moment'
    import { ref } from 'vue'
    import commentModal from './CommentModal.vue'
    import handleRetweet from '../utils/handleRetweet'
    import handleLikes from '../utils/handleLikes'
    import { COMMENT_COLLECTION, LIKES_COLLECTION, RETWEET_COLLECTION, TWEET_COLLECTION, USER_COLLECTION } from '../firebase'
    import firebase from 'firebase'

    export default {
        components : { commentModal },
        //Home.vue에서 넘겨받을 정보를 사용할 수 있게 props 이용    
        props : ['currentUser', "tweet"],
        setup() {
            const showCommentModal = ref(false)

            const onDeleteTweet = async (tweet) => {
                if (confirm("정말로 트윗을 삭제하시겠습니까?")) {
                    //delete tweet
                    await TWEET_COLLECTION.doc(tweet.id).delete()

                    // delete comment
                    const commentSnapshot = await COMMENT_COLLECTION.where("from_tweet_id", "==", tweet.id).get()
                    commentSnapshot.docs.forEach(async (doc) => await doc.ref.delete())

                    // delete like
                    const likeSnapshot = await LIKES_COLLECTION.where("from_tweet_id", "==", tweet.id).get()
                    likeSnapshot.docs.forEach(async (doc) => await doc.ref.delete())

                    // delete retweets
                    const retweetSnapshot = await RETWEET_COLLECTION.where("from_tweet_id", "==", tweet.id).get()
                    retweetSnapshot.docs.forEach(async (doc) => await doc.ref.delete())

                    // user collection = num_tweets (-1)
                    await USER_COLLECTION.doc(tweet.uid).update({
                        num_retweets : firebase.firestore.FieldValue.increment(-1),
                    })
                } 
            }

            return { 
                moment, 
                showCommentModal, 
                handleRetweet, 
                handleLikes,
                onDeleteTweet 
            }
        }
    }
</script>
