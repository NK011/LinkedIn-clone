import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5icTb02HJ1ms8UWIOdHdbJv1zj_EKaC8",
    authDomain: "linkedin-f90f7.firebaseapp.com",
    projectId: "linkedin-f90f7",
    storageBucket: "linkedin-f90f7.appspot.com",
    messagingSenderId: "675331077494",
    appId: "1:675331077494:web:acdb424be4ffad53a1b657",
    measurementId: "G-14697FPXD0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }