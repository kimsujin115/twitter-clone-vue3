
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDy1vocglpqIIdvTuEdggnOt_unc1xrsmQ",
    authDomain: "twitter-clone-vue-ff610.firebaseapp.com",
    projectId: "twitter-clone-vue-ff610",
    storageBucket: "twitter-clone-vue-ff610.appspot.com",
    messagingSenderId: "230073120541",
    appId: "1:230073120541:web:4cc2b67f60e3a7b98813f4",
    measurementId: "G-2SNVY50Z97"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const db = firebase.firestore()
  export const storage = firebase.storage()

  export const USER_COLLECTION = db.collection("users")
  export const TWEET_COLLECTION = db.collection("tweets")
  export const COMMENT_COLLECTION = db.collection("comments")
  export const RETWEET_COLLECTION = db.collection("retweets")
  export const LIKES_COLLECTION = db.collection("likes")
  export const MESSAGE_COLLECTION = db.collection("messages")