import * as firebase from "firebase/app";

import "firebase/auth";
  
  var firebaseConfig = {
    apiKey: "AIzaSyCj-bKq5o67dvzyLnwZeBccBSWVF0mRiIQ",
    authDomain: "recruit-pro-30bd8.firebaseapp.com",
    databaseURL: "https://recruit-pro-30bd8.firebaseio.com",
    projectId: "recruit-pro-30bd8",
    storageBucket: "recruit-pro-30bd8.appspot.com",
    messagingSenderId: "322065027638",
    appId: "1:322065027638:web:f3e703eee369102e9b3e97",
    measurementId: "G-LCD37510HG"
  };
  
 let firebaseApp = firebase.initializeApp(firebaseConfig);
 let firebaseAuth = firebaseApp.auth();
 export { firebaseAuth}