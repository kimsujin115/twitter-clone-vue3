import { LIKES_COLLECTION, RETWEET_COLLECTION, USER_COLLECTION } from "../firebase"

export default async (tweet, currentUser) => {
    // Adding user info 
    const doc = await USER_COLLECTION.doc(tweet.uid).get()
    tweet.profile_img_url = doc.data().profile_img_url
    tweet.email = doc.data().email
    tweet.username = doc.data().username

    //tweet = {...tweet, ...doc.data()} //js ... synlax (유저컬랙션과 트윗컬랙션 전체 가져올 때 이런 구문 사용가능)
    //console.log(tweet)

    // Adding retweet info
    const retweetSnapshot = await RETWEET_COLLECTION.where("from_tweet_id", "==", tweet.id).where("uid", "==", currentUser.uid).get()
    if (retweetSnapshot.empty) {
        tweet.isRetweeted = false
    } else {
        tweet.isRetweeted = true
    }

    // Adding likes info
    const likeSnapshot = await LIKES_COLLECTION.where("from_tweet_id", "==", tweet.id).where("uid", "==", currentUser.uid).get()
    if (likeSnapshot.empty) {
        tweet.isLiked = false
    } else {
        tweet.isLiked = true
    }
    return tweet
}