import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"


const firebaseConfig = {
      apiKey: "AIzaSyCGZuYQCyY1_oucidjSZ-UJlkaIe7IhsRs",
      authDomain: "dont-overthink.firebaseapp.com",
      projectId: "dont-overthink",
      storageBucket: "dont-overthink.appspot.com",
      messagingSenderId: "301855302207",
      appId: "1:301855302207:web:d1da5eeca420be0146ce8a",
      measurementId: "G-MSE475B0HM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
