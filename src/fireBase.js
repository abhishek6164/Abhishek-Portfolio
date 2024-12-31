import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf34hGxp-n7gVFxy7tr0cRyt5Emh06h44",
  authDomain: "new-portfolio-9f967.firebaseapp.com",
  projectId: "new-portfolio-9f967",
  storageBucket: "new-portfolio-9f967.appspot.com", // Corrected typo
  messagingSenderId: "529576295314",
  appId: "1:529576295314:web:9d935aed002ba985ce1f4b",
  measurementId: "G-XY6EZSESR6",
  databaseURL: "https://new-portfolio-9f967-default-rtdb.firebaseio.com/", // Correct database URL
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Export database instance
