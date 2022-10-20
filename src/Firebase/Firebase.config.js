// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7XeWKX86rl8VujV0HEY-4E7zxOUo6-z8",
    authDomain: "adda-news.firebaseapp.com",
    projectId: "adda-news",
    storageBucket: "adda-news.appspot.com",
    messagingSenderId: "855110336242",
    appId: "1:855110336242:web:67b6d6426bfe1501f5da6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;