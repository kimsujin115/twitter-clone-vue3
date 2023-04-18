<template>
  <div class="flex-1 flex">
    <div class="flex-1 border-r border-gray-100">
        <div class="flex flex-col" v-if="tweet">
            <!-- title -->
            <div class="flex items-center px-3 py-2 border-b border-gray-100">
                <button @click="router.go(-1)">
                    <i class="fas fa-arrow-left text-primary text-lg ml-3 hover:bg-blue-50 p-2 rounded-full h-10 w-10"></i>
                </button>
                <span class="font-bold text-lg ml-6">트윗</span>
            </div>
            <!-- tweet -->
            <div class="px-3 py-2 flex">
                <router-link :to="`/profile/${tweet.uid}`">
                  <img :src="tweet.profile_img_url" alt="" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer">
                </router-link>
                <div class="ml-2">
                    <div class="font-bold">{{tweet.email}}</div>
                    <div class="text-gray text-sm">{{ tweet.username }}</div>
                </div>
            </div>
            <!-- 본문 -->
            <div class="border-b border-gray-100">
                <div class="px-3 py-2">{{ tweet.tweet_body }}</div>
                <div class="px-3 py-2 text-gray text-xs">{{ moment(tweet.create_at).fromNow() }}</div>
            </div>
            <div class="flex space-x-2 items-center px-3 py-2 border-b border-gray-100">
                <span>{{ tweet.num_retweets}}</span>
                <span class="text-sm text-gray">리트윗</span>
                <span class="ml-5">{{ tweet.num_likes }}</span>
                <span class="text-sm text-gray">마음에 들어요</span>
            </div>
            <div class="flex justify-around py-2 border-b border-gray-100">
                <button @click="showCommentModal = true" class="far fa-comment text-gray-400 text-xl hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10"></button>
                <button @click="handleRetweet(tweet)">
                    <i v-if="tweet.isRetweeted" class="fas fa-retweet text-green-400 text-xl hover:bg-green-50 p-2 rounded-full w-10 h-10"></i>
                    <i v-else class="fas fa-retweet text-gray-400 text-xl hover:bg-green-50 hover:text-green-400 p-2 rounded-full w-10 h-10"></i>
                </button>
                <button @click="handleLikes(tweet)">
                    <i v-if="tweet.isLiked" class="far fa-heart text-red-400 text-xl hover:bg-red-50 p-2 rounded-full w-10 h-10"></i>
                    <i v-else class="far fa-heart text-gray-400 text-xl hover:bg-red-50 hover:text-red-400 p-2 rounded-full w-10 h-10"></i>
                </button>
            </div>
            <!-- comments -->
            <div v-for="comment in comments" :key="comment" class="flex hover:bg-gray-50 cursor-pointer px-3 py-3 border-b border-gray-100">
                <router-link :to="`/profile/${comment.uid}`">
                  <img :src="comment.profile_img_url" alt="" class="w-10 h-10 rounded-full hover:opacity-90 cursor-pointer">
                </router-link>
                <div class="ml-2 flex-1">
                    <div class="flex items-center space-x-2">
                        <span class="font-bold">{{ comment.email }}</span>
                        <span class="text-gray text-sm">@{{ comment.username }}</span>
                        <span>{{ moment(comment.created_at).fromNow() }}</span>
                    </div>
                    <div>{{ comment.comment_tweet_body }}</div>
                </div>
                <button @click="handleDeleteComment(comment)" v-if="comment.uid === currentUser.uid">
                    <i class="fas fa-trash text-red-400 hover:bg-red-50 w-10 h-10 rounded-full p-2 "></i>
                </button>
            </div>
        </div>
    </div>
    <trends></trends>
    <comment-modal :tweet="tweet" v-if="showCommentModal" @close-modal="showCommentModal = false"></comment-modal>
  </div>
</template>

<script>
import Trends from '../components/Trends.vue'
import router from '../router'
import { onBeforeMount, ref, computed } from 'vue'
import store from '../store'
import { COMMENT_COLLECTION, TWEET_COLLECTION } from '../firebase'
import { useRoute } from 'vue-router'
import getTweetInfo from '../utils/getTweetInfo'
import moment from 'moment'
import CommentModal from '../components/CommentModal.vue'
import handleRetweet from '../utils/handleRetweet'
import handleLikes from '../utils/handleLikes'
import firebase from 'firebase'

export default {
  components: { Trends, CommentModal },
  setup() {
    const tweet = ref(null)
    const comments = ref([])
    const currentUser = computed(() => store.state.user)
    const showCommentModal = ref(false)

    const route = useRoute()

    const handleDeleteComment = async (comment) => {
        if (confirm("댓글을 삭제하시겠습니까?")) {
            //delete comment
            await COMMENT_COLLECTION.doc(comment.id).delete();

            // decrease tweet num comments
            await TWEET_COLLECTION.doc(comment.from_tweet_id).update({
                "num_comments" : firebase.firestore.FieldValue.increment(-1),
            })
        }
    } 

    onBeforeMount(async () => {
      await TWEET_COLLECTION.doc(route.params.id).onSnapshot(async (doc) => {
        const t = await getTweetInfo(doc.data(), currentUser.value)
        tweet.value = t
      })

      COMMENT_COLLECTION.orderBy('created_at', 'desc').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          let comment = await getTweetInfo(change.doc.data(), currentUser.value)
          if (change.type === 'added') {
            comments.value.splice(change.newIndex, 0, comment)
          } else if (change.type === 'modified') {
            comments.value.splice(change.oldIndex, 1, comment)
          } else if (change.type === 'removed') {
            comments.value.splice(change.oldIndex, 1)
          }
        })
      })
    })
    return { router, tweet, comments, currentUser, moment, showCommentModal, handleRetweet, handleLikes, handleDeleteComment }
  },
}
</script>