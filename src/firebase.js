import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function addInfo(user, username) {
  await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
      username: username,
  });
}

export async function getInfo() {
  getDocs(collection(db, "users"))
  .then((snapshot) => {
      const users = [];
      snapshot.docs.forEach((doc) => {
          users.push({...doc.data(), id: doc.id })
      })
      console.log(users);
  })
}