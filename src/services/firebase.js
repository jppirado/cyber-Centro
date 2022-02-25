
import firebase from "firebase/app"
import auth from "firebase/auth"
import firestore from "firebase/firebase-firestore"
import 'firebase/storage'




export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MASSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()
const Auth = firebase.auth();
export { firebase, Auth , storage, firestore }