import firebase from "firebase";

const firebaseConfig = {
  // some apikey
  apiKey: "AIzaSyBXnSj8_whRD2LKkI-uXwEZKSRnBYQ66Wk",
  authDomain: "snapchat-clone-37497.firebaseapp.com",
  projectId: "snapchat-clone-37497",
  storageBucket: "snapchat-clone-37497.appspot.com",
  messagingSenderId: "717367110986",
  appId: "1:717367110986:web:1ce331f206f610d7a525b3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
