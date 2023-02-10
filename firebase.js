// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
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

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (categoria, marca, modelo, color, precio) =>
  addDoc(collection(db, "Articulos"), { categoria, marca, modelo, color, precio });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "Articulos"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "Articulos", id));

export const getTask = (id) => getDoc(doc(db, "Articulos", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "Articulos", id), newFields);

export const getTasks = () => getDocs(collection(db, "Articulos"));