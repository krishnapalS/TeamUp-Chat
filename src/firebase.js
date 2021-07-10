import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBxRNw3stQY8i80UmBKWzT7G2G8jxOau8g",
    authDomain: "teamup-chat-room.firebaseapp.com",
    projectId: "teamup-chat-room",
    storageBucket: "teamup-chat-room.appspot.com",
    messagingSenderId: "143171413929",
    appId: "1:143171413929:web:38e26678dbf5a63ee386b8"
  }).auth();

  