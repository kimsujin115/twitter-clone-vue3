import { RETWEET_COLLECTION, TWEET_COLLECTION } from "../firebase";
import store from "../store"
import firebase from "firebase";

export default async (tweet) => {
    try {
        //이미 리트윗 했을 경우
        if (tweet.isRetweeted) {
            // Delete retweet doc
            const snapshot = await RETWEET_COLLECTION.where("from_tweet_id", "==", tweet.id).where("uid", "==", store.state.user.uid).get()
            await snapshot.docs[0].ref.delete() //첫번째 docs 삭제
            // Decrease retweet number
            await TWEET_COLLECTION.doc(tweet.id).update({
                num_retweets: firebase.firestore.FieldValue.increment(-1)
            })
        } else {
            // 리트윗 하지 않았을 경우
            const doc = RETWEET_COLLECTION.doc()
            await doc.set({
                "id" : doc.id,
                "from_tweet_id" : tweet.id,
                "uid" : store.state.user.uid,
                "created_at" : Date.now()
            })

            await TWEET_COLLECTION.doc(tweet.id).update({
                num_retweets: firebase.firestore.FieldValue.increment(1), //firebase 공식문서 참고
            })
        }
        
    } catch(e) {
        console.log('handle retweet error: ', e)
    }
    
}