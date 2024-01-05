// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlakNW0Hx3gBd3pwnl4MN1839liX4rHm0",
  authDomain: "lipstick-world.firebaseapp.com",
  projectId: "lipstick-world",
  storageBucket: "lipstick-world.appspot.com",
  messagingSenderId: "178851598009",
  appId: "1:178851598009:web:0c87cc525e27d3c065d568"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app