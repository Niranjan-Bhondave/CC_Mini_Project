
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAyMMG0Rms6w05d2BeIp2G3yo0AEqZhBWo",
  authDomain: "cloud-computing-mini-pro-43a80.firebaseapp.com",
  databaseURL: "https://cloud-computing-mini-pro-43a80-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cloud-computing-mini-pro-43a80",
  storageBucket: "cloud-computing-mini-pro-43a80.appspot.com",
  messagingSenderId: "94038794137",
  appId: "1:94038794137:web:9b1495fbfc69e401417d08",
  measurementId: "G-151Y3L8KX5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);