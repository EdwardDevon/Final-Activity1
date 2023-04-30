import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1JpryLPC4oXt5pHqFVgrSwHpU5r8c_cA",
  authDomain: "react-crud-app-75c54.firebaseapp.com",
  projectId: "react-crud-app-75c54",
  storageBucket: "react-crud-app-75c54.appspot.com",
  messagingSenderId: "942585859556",
  appId: "1:942585859556:web:f2b9177791e4e27a42cbf1",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
