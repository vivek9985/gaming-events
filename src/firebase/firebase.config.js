// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLQXHfDy7fWAdFennLVi8Saf6-4t35LPI",
  authDomain: "gaming-events-auth.firebaseapp.com",
  projectId: "gaming-events-auth",
  storageBucket: "gaming-events-auth.appspot.com",
  messagingSenderId: "656651562510",
  appId: "1:656651562510:web:07827b9e0ead724941d65f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;