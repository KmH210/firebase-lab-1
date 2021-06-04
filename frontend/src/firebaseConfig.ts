import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4ENeR9-I_Q_UiyK3YJtrBknyE8uJbB0I",
    authDomain: "shout-outs-lab-89003.firebaseapp.com",
    projectId: "shout-outs-lab-89003",
    storageBucket: "shout-outs-lab-89003.appspot.com",
    messagingSenderId: "79254251767",
    appId: "1:79254251767:web:d9f2326e8084c272c20bf2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export app again once it has been configured
export const authProvider = new firebase.auth.GoogleAuthProvider();

export function signInWithGoogle(): void {
    firebase.auth().signInWithPopup(authProvider);
}
    
export function signOut(): void {
    firebase.auth().signOut();
}

export default firebase;