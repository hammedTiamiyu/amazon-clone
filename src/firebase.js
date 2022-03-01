import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXzG6Bno40PNIjTrxCU2btsT0q7nuRxkg",
  authDomain: "amazhon-clone-v1.firebaseapp.com",
  projectId: "amazhon-clone-v1",
  storageBucket: "amazhon-clone-v1.appspot.com",
  messagingSenderId: "174651983656",
  appId: "1:174651983656:web:272f976cb84b9adcce721d",
  measurementId: "G-W90P7BVLEN"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };