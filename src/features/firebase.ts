import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

if (!getApps().length) {
  initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  });
}

export const firebaseApp = getApp();
export const firebaseAuth = getAuth();
export const firestore = getFirestore();
export const firebaseStorage = getStorage();
export const firebaseFunctions = getFunctions();
export const analytics = getAnalytics();

// if (process.env.NODE_ENV == 'development') {
//   firebaseFunctions.useEmulator('localhost', 5001);
//   // firestore.useEmulator('localhost', 8080);
// }
