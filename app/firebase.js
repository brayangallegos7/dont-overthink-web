import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"


const firebaseConfig = {
      apiKey: "AIzaSyBIcSJwvMk8Sk3cJCwZWeqTf5JxNs7YNBk",
      authDomain: "thebikeshop-8792a.firebaseapp.com",
      projectId: "thebikeshop-8792a",
      storageBucket: "thebikeshop-8792a.appspot.com",
      messagingSenderId: "161316754472",
      appId: "1:161316754472:web:efffb63252e7b09c10511d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
