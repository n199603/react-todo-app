import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAuBy-oU8VXfcVTFwBCTbnsDONq1rxtH00",
  authDomain: "react-todo-app-d1751.firebaseapp.com",
  projectId: "react-todo-app-d1751",
  storageBucket: "react-todo-app-d1751.appspot.com",
  messagingSenderId: "146804757990",
  appId: "1:146804757990:web:c26c7c1b516eb5f974f227",
});

export { firebaseConfig as firebase };
