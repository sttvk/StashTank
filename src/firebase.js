import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMwhU1bO570Tmae3IWtFdTmfQ1CLAZrBk",
  authDomain: "stash-tank.firebaseapp.com",
  projectId: "stash-tank",
  storageBucket: "stash-tank.appspot.com",
  messagingSenderId: "778546633499",
  appId: "1:778546633499:web:9b831638bf02aed8a711be",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
