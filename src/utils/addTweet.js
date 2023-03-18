import { TWEET_COLLECTION } from '../firebase'

export default (tweetBody, currentUser) => { 

    return new Promise(async (resolve, reject) => {
        try {
            const doc = TWEET_COLLECTION.doc()
            await doc.set({
                id : doc.id,
                tweet_body : tweetBody,
                uid : currentUser.uid,
                create_at : Date.now(),
                num_comments : 0,
                num_retweets : 0,
                num_likes : 0,
            })
            // tweetBody.value = '';
            resolve(true)
        } catch(e) {
            // console.log('on add tweet error on homepage')
            reject(e)
        }
    })
   
}