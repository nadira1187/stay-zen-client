// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxE2BQa2hrxDhWDAkUWf3HHr18iGvbgQE",
  authDomain: "stay-zen-client.firebaseapp.com",
  projectId: "stay-zen-client",
  storageBucket: "stay-zen-client.appspot.com",
  messagingSenderId: "178111668976",
  appId: "1:178111668976:web:5fd0f3e80f6427c2105835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;