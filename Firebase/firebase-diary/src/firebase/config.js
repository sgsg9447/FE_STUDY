// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STROAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_Id,
};

// Initialize Firebase
// 앱 초기화
const app = initializeApp(firebaseConfig);
// 인증 초기화
const appAuth = getAuth();
//firestore 초기화
const appFireStore = getFirestore(app);
const timeStamp = Timestamp;
export { appAuth, appFireStore, timeStamp };
