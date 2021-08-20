// const firebaseConfig = {
//   apiKey: "AIzaSyBMcH-jx7VNZ3OtVsHLAqlF-CAeevwf8bY",
//   authDomain: "todo-app-93c9b.firebaseapp.com",
//   projectId: "todo-app-93c9b",
//   storageBucket: "todo-app-93c9b.appspot.com",
//   messagingSenderId: "410072603629",
//   appId: "1:410072603629:web:0a5b8fa694a55c1409a5e4",
//   measurementId: "G-MY6GHH5VZY",
// };

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMcH-jx7VNZ3OtVsHLAqlF-CAeevwf8bY",
  authDomain: "todo-app-93c9b.firebaseapp.com",
  projectId: "todo-app-93c9b",
  storageBucket: "todo-app-93c9b.appspot.com",
  messagingSenderId: "410072603629",
  appId: "1:410072603629:web:0a5b8fa694a55c1409a5e4",
  measurementId: "G-MY6GHH5VZY",
});

const db = firebaseApp.firestore();
// const aut=firebase.auth();
export default db;
