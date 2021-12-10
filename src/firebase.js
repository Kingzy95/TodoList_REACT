import firebase from 'firebase/app';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyChHHvSkj2n77xc2L4lEsq9BYH8SuBGj4s",
    authDomain: "todolist-react-f43e2.firebaseapp.com",
    projectId: "todolist-react-f43e2",
    storageBucket: "todolist-react-f43e2.appspot.com",
    messagingSenderId: "1092304359450",
    appId: "1:1092304359450:web:5012d030beca62c4e541a3",
    measurementId: "${config.measurementId}"
})

export { firebaseConfig as firebase };